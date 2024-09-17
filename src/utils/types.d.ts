export interface SWContextValue {
    changeHero: (hero: string) => void,
    hero: string,
    isError: boolean,
    setIsError: (isError: boolean) => void
}

export interface HeroInfo {
    "name": string,
    "height": number,
    "mass": number,
    "hair_color": string,
    "skin_color": string,
    "eye_color": string,
    "birth_year": string,
    "gender": string
}

export interface Item {
    title: string,
    path: string
}

export interface CharacterItem { 
 name: string,
 img: string,
 url: string   
}

export interface CharacterItems { [key: string]: any; };