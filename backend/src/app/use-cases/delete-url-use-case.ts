import { NotFoundError } from "../../infra/http/errors/not-found";
import { UnauthorizedError } from "../../infra/http/errors/unauthorized";
import Auth from "../../infra/modules/auth";
import URLsRepository from "../repositories/urls-repository";
import UsersRepository from "../repositories/users-repository";

type DeleteURLRequest = {
  id: string;
  token: string;
};

export default class DeleteURLUseCase {
  constructor(
    private URLsRepository: URLsRepository,
    private usersRepository: UsersRepository,
    private auth: Auth,
  ) {}

  async execute(request: DeleteURLRequest): Promise<void> {
    const { id: urlId, token } = request;

    const isTokenValid = this.auth.verifyToken(token);

    if (!isTokenValid) {
      throw new UnauthorizedError("Invalid token");
    }

    const url = await this.URLsRepository.findById(urlId);

    if (!url) {
      throw new NotFoundError("URL not found");
    }

    const userId = this.auth.decodeToken<{ id: string }>(token).id;

    if (url.userId !== userId) {
      throw new UnauthorizedError("Invalid token");
    }

    await this.URLsRepository.delete(url);
  }
}
