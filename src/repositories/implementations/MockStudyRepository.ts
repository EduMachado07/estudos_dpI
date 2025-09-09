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
      author: "authorId1"
    },
  ),
  new Study({
    title: "Estudo 2",
    description: "Descricao do estudo 2",
    thumbnail: "thumbnail2.jpg",
    body: {},
    author: "authorId1"
  }),
  new Study({
    title: "Estudo 3",
    description: "Descricao do estudo 3",
    thumbnail: "thumbnail3.jpg",
    body: {},
    author: "authorId1"
  }),
  new Study({
    title: "Estudo 4",
    description: "Descricao do estudo 4",
    thumbnail: "thumbnail4.jpg",
    body: {},
    author: "authorId2"
  }),
  new Study({
    title: "Estudo 5",
    description: "Descricao do estudo 5",
    thumbnail: "thumbnail5.jpg",
    body: {},
    author: "authorId2"
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

  async findById(id: string): Promise<Study | null> {
    const study = MockStudies.find((study) => study.id === id);

    return study || null;
  }

  async deleteById(id: string): Promise<void> {
    MockStudies = MockStudies.filter((study) => study.id !== id);
  }

  async updateById(id: string, data: Partial<Study>): Promise<Study> {
    const studyIndex = MockStudies.findIndex((study) => study.id === id);
    if (studyIndex === -1) {
      throw new BadRequest("Estudo nao encontrado.");
    }

    const { id: _, slug:__, ...rest } = data;
    const updatedStudy = {
      ...MockStudies[studyIndex],
      ...rest,
    };

    MockStudies[studyIndex] = updatedStudy;

    return updatedStudy;
  }
}
