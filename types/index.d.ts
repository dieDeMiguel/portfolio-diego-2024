export interface Dictionary {
  [key: string]: {
    [innerKey: string]: string | { [nestedKey: string]: any } | Array<{ [nestedKey: string]: any }> | any
  };
}

export type FeatureI = {
  title: string
  description: string
}

export type QuestionI = {
  question: string
  answer: string
}

export type ReleaseI = {
  version: string
  date: string
  features: string[]
}