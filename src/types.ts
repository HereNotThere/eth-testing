export type MockCondition = (params: unknown[]) => boolean;
export type MockExecution = (params: unknown[]) => Promise<unknown>;

export type MockOptions = {
  persistent?: boolean;
  shouldThrow?: boolean;
  timeout?: number;
  condition?: MockCondition;
  executeFn?: MockExecution;
  triggerCallback?: (data?: unknown, params?: unknown[]) => void;
};

export type MockRequest = {
  method: string;
  data: unknown;
} & MockOptions;
