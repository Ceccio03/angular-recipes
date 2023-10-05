export interface Recipe {
    createdAt: number
    name: string
    ingredients: string[]
    description: string
    url: string
    category: number
    id?: string
}

export enum DishType {
    antipasto,
    primo,
    secondo,
    contorno,
    dessert,
    cocktail
  }