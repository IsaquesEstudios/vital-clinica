import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/equipe")({
  beforeLoad: () => {
    throw redirect({ to: "/a-clinica" });
  },
});
