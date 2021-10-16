
export type SerializedIngredient = {
    id: string;
    name: string;
    description: string;

}

export class Ingredient {
    static createFromResponse(response: SerializedIngredient): Ingredient {
        return new Ingredient(
            response.id,
            response.name,
            response.description
        );
    }

    constructor(
        protected id: string,
        protected name: string,
        protected description: string
    ) {}

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    serialize(): SerializedIngredient {
        return {
            id: this.id,
            name: this.name,
            description: this.description
        };
    }

    toJSON(): SerializedIngredient {
        return this.serialize();
    }
}