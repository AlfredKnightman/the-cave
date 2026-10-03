import AgentClient from "./agent-client";

const agentIds = ["alfred", "nova", "warren", "scout", "rex", "stella", "sats", "pixel"];

export function generateStaticParams() {
  return agentIds.map((id) => ({ id }));
}

export default function AgentPage() {
  return <AgentClient />;
}
