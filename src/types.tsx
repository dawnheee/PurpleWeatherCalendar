export interface User {
  email: string;
  name?: string;
  password: string;
  token?: string;
}

export type TodoId = string;

// export type Todos = Todo[];

export interface Todo {
  // contents와 자세한 정보가 포함
  // daily page에서 쓰는 정보
  id: TodoId; // uuid 만들어서 넣거나 작성된 시간(Date)
  date: Date; // 할당된 날짜와 시간(언제까지 수행하는지)
  contents: string; // todo 내용
  isComplete: IsComplete; // 수행 여부
}

export type IsComplete = 0 | 1 | 2;
// 해당 날짜의 todo 수행여부
// 0: todo 모두 수행하지 않음
// 1: todo 모두 수행
// 2: todo 없음

export interface DailyConclusion {
  // 날짜와 수행여부만 포함
  date: Date;
  isComplete: IsComplete;
}
export type MonthlyConclusion = DailyConclusion[]; // 월의 모든 날짜 todo 상태 배열
// [{date: '324234234', isComplete: 0}, {date: '32433333234', isComplete: 1}, ...]
