import db from "../db/index.js";

export class ForbiddenError extends Error {}

// Verifica se uma sala pertence ao professor. Lanca ForbiddenError se nao.
export function assertRoomOwnership(roomId, teacherId) {
  const room = db.prepare("SELECT teacher_id FROM rooms WHERE id = ?").get(roomId);

  if (!room || room.teacher_id !== teacherId) {
    throw new ForbiddenError("sem permissão para acessar esta sala");
  }
}

// Verifica se um agente pertence a uma sala do professor. Lanca ForbiddenError se nao.
export function assertAgentOwnership(agentUuid, teacherId) {
  const agent = db
    .prepare(`
    SELECT r.teacher_id FROM agents a
    JOIN rooms r ON r.id = a.room_id
    WHERE a.agent_uuid = ?
  `)
    .get(agentUuid);

  if (!agent || agent.teacher_id !== teacherId) {
    throw new ForbiddenError("sem permissão para acessar este agente");
  }
}
