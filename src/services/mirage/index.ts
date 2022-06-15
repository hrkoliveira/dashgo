import {
  ActiveModelSerializer,
  createServer,
  Factory,
  Model,
  Response,
  Server,
} from "miragejs";
import { User } from "../../models/user";
import { internet, date } from "faker";

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    serializers: {
      application: ActiveModelSerializer,
    },
    factories: {
      user: Factory.extend({
        name: (index: number) => `User ${index + 1}`,
        email: (index: number) => internet.email().toLowerCase(),
        createdAt: () => date.recent(2),
      }),
    },
    seeds(server: Server) {
      server.createList("user", 51);
    },
    routes() {
      this.namespace = "api";

      this.get("/users", (schema, request) => {
        const { page = 1, perPage = 10 } = request.queryParams;

        const allUsers = schema.all("user");

        const totalCount = allUsers.length;
        const numStart = (Number(page) - 1) * Number(perPage);
        const numEnd = numStart + Number(perPage);

        const users = allUsers.models.slice(numStart, numEnd);

        return new Response(
          200,
          {
            "x-total-count": String(totalCount),
          },
          { users }
        );
      });
      this.get("/users/:id");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}