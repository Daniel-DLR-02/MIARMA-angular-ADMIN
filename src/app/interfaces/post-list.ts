export interface PostList {
  content:          Post[];
  pageable:         Pageable;
  last:             boolean;
  totalPages:       number;
  totalElements:    number;
  size:             number;
  number:           number;
  sort:             Sort;
  first:            boolean;
  numberOfElements: number;
  empty:            boolean;
}

export interface Pageable {
  sort:       Sort;
  offset:     number;
  pageSize:   number;
  pageNumber: number;
  unpaged:    boolean;
  paged:      boolean;
}

export interface Sort {
  empty:    boolean;
  sorted:   boolean;
  unsorted: boolean;
}


export interface Post {
  id:                    number;
  titulo:                string;
  usuario:               Usuario;
  texto:                 string;
  ficheroAdjunto:        string;
  ficheroAdjuntoResized: string;
  publica:               boolean;
}

export interface Usuario {
  nick:                string;
  nombre:              string;
  fechaDeNacimiento:   string;
  numeroSeguidores:    number;
  numeroSeguidos:      number;
  numeroPublicaciones: number;
  email:               string;
  avatar:              string;
  perfilPublico:       boolean;
}
