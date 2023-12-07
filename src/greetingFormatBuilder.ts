interface Person {
    firstName: string;
    lastName: string;
    greeting: string;
}

export function greetingFormatBuilder({ firstName, lastName, greeting }: Person): string {
    return `${greeting} My name is ${firstName} ${lastName}.`;
}
