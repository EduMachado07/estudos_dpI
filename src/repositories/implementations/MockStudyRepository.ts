import { id } from "zod/v4/locales/index.cjs";
import { Study } from "../../entities/Study";
import { IStudyRepository } from "../IStudyRepository";
import { BadRequest } from "../IErrorRepository";

export let MockStudies: Study[] = [
  new Study(
    {
      title: "Estudo 1",
      description: "Descricao do estudo 1",
      thumbnail: "thumbnail1.jpg",
      body: {},
    },
    "1"
  ),
  new Study({
    title: "Estudo 2",
    description: "Descricao do estudo 2",
    thumbnail: "thumbnail2.jpg",
    body: {},
  }),
  new Study({
    title: "Estudo 3",
    description: "Descricao do estudo 3",
    thumbnail: "thumbnail3.jpg",
    body: {},
  }),
  new Study({
    title: "Estudo 4",
    description: "Descricao do estudo 4",
    thumbnail: "thumbnail4.jpg",
    body: {},
  }),
  new Study({
    title: "Estudo 5",
    description: "Descricao do estudo 5",
    thumbnail: "thumbnail5.jpg",
    body: {},
  }),
  new Study({
    title: "Estudo 6",
    description: "Descricao do estudo 6",
    thumbnail: "thumbnail6.jpg",
    body: {},
  }),
  new Study({
    title: "Estudo 7",
    description: "Descricao do estudo 7",
    thumbnail: "thumbnail7.jpg",
    body: {},
  }),
  new Study({
    title: "Estudo 8",
    description: "Descricao do estudo 8",
    thumbnail: "thumbnail8.jpg",
    body: {},
  }),
  new Study({
    title: "Estudo 9",
    description: "Descricao do estudo 9",
    thumbnail: "thumbnail9.jpg",
    body: {},
  }),
  new Study({
    title: "Estudo 10",
    description: "Descricao do estudo 10",
    thumbnail: "thumbnail10.jpg",
    body: {},
  }),
];

export class MockStudyRepository implements IStudyRepository {
  async create(data: Study): Promise<Study> {
    MockStudies.push(data);

    return data;
  }

  async findStudies(
    offset?: number,
    limit?: number
  ): Promise<{ studies: Study[]; length: number }> {
    const studies = MockStudies.slice(offset, offset + limit);
    return { studies, length: MockStudies.length };
  }

  async findStudyById(id: string): Promise<Study | null> {
    const study = MockStudies.find((study) => study.id === id);

    return study || null;
  }

  async deleteById(id: string): Promise<void | string> {
    if (!MockStudies.find((study) => study.id === id)) {
      throw new BadRequest("Estudo nao encontrado.");
    }

    MockStudies = MockStudies.filter((study) => study.id !== id);
  }
}
