import { Tarefa } from "./tipo"

export const tarefas: Tarefa[] = [
    {id: 1, titulo: "Estudo de mamíferos raros", prioridade: "alta", status: "pendente", tags: ["estudo", "vídeo"], criadaEm: new Date()},
    {id: 2, titulo: "Observação de mamíferos raros", prioridade: "alta", status: "pendente", tags: ["estudo"], criadaEm: new Date()},
    {id: 3, titulo: "Identificação de fezes", prioridade: "baixa", status: "pendente", tags: ["estudo"], criadaEm: new Date()},
    {id: 4, titulo: "Análise de fósseis", prioridade: "alta", status: "em_andamento", tags: ["estudo"], criadaEm: new Date()},
    {id: 5, titulo: "Estudo da integração da biocomputação com biologia", prioridade: "media", status: "em_andamento", tags: ["estudo", "trabalho"], criadaEm: new Date()},
    {id: 6, titulo: "Estudo da análise de DNA através de amostras em âmbar", prioridade: "media", status: "em_andamento", tags: ["estudo"], criadaEm: new Date()},
    {id: 7, titulo: "Estudo de criação de jogos", prioridade: "baixa", status: "concluida", tags: ["estudo"], criadaEm: new Date()},
    {id: 8, titulo: "Desenvolvimento de jogo baseado em biologia", prioridade: "alta", status: "concluida", tags: ["estudo", "tecnologia"], criadaEm: new Date()},
    {id: 9, titulo: "Realizar anotações da aula", prioridade: "baixa", status: "concluida", tags: ["estudo"], criadaEm: new Date()},
    {id: 10, titulo: "Falar obrigado para o motorista do ônibus: educação ou necessidade?", prioridade: "baixa", status: "concluida", tags: ["estudo", "analise"], criadaEm: new Date()},
]