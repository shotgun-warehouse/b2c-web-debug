// Define some useful type aliases
export type Listener = () => void;

export type OnClickListener = (ev: React.MouseEvent<HTMLElement>) => void;

export type Optional<T> = T | undefined;

// Just an alias to make it explicit this is an id string in code
export type Id = string;
