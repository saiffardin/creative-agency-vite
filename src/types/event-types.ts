import { ChangeEvent, FocusEvent, FormEvent } from "react";

export type OnSubmitEvent = FormEvent;
export type OnBlurEvent = FocusEvent<HTMLInputElement>;
export type OnChangeEvent = FormEvent<HTMLInputElement>;
export type OnChangeSelectEvent = ChangeEvent<HTMLSelectElement>;
