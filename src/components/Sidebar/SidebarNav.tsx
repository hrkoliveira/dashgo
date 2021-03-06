import { Box, Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" title="Dashboard" icon={RiDashboardLine} />
        <NavLink href="/users" title="Usuários" icon={RiContactsLine} />
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink href="/forms" title="Formulários" icon={RiInputMethodLine} />
        <NavLink href="/automation" title="Automação" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  );
}