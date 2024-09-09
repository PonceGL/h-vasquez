export interface Company {
    name: string;
    fullName: string;
    address: string;
    phone: string;
    image: string;
    website?: string;
    mapsUrl?: string;
}

export interface WebData extends Company {
    city: string;
    state: string;
    zip: string;
}

export interface Companies  {
    MATERIALES: Company
    TRANSPORTES: Company
    CONSTRUCTORA: Company
    TRANSPORTES_MJM: Company
}

export interface Pillar {
    title: string;
    description: string;
    image: string;
}