import { atomFamily } from 'recoil';
import { fetchArticle } from '../Api/Api';

export const articleInfoState = atomFamily({
  key: '@ArticleAtom/infoState',
  default: (query) => {
    return query.userId ? fetchArticle(query) : null;
  },
});
