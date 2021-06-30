import React, { useEffect, useState } from 'react';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import { fetchArticle } from '../Api/Api';
import { ArticleAtom, articleInfoState } from '../Atoms/AxisAtomFamily';

export const QueryRefreshExample = () => {
  const [voltage, setVoltage] = useState('');
  const [userId, setUserId] = useState('');
  const [query, setQuery] = useState({ userId: '', massage: '', voltage: '' });
  const articles = useRecoilValue(articleInfoState(query));
  const refreshArticle = useRecoilCallback(
    ({ set }) =>
      async (query) => {
        const response = await fetchArticle(query);
        if (response.error) throw new Error();
        set(articleInfoState(query), response.data);
      },
    [query]
  );

  const handleClick = () => {
    setQuery({
      userId: userId,
      massage: 'test',
      voltage: voltage,
    });
  };

  useEffect(() => {
    if (query.userId) {
      refreshArticle(query);
    }
  }, [query, refreshArticle]);

  return (
    <div>
      <span>userID</span>
      <input onChange={(e) => setUserId(e.target.value)} />
      <span>voltage</span>
      <input onChange={(e) => setVoltage(e.target.value)} />
      <button onClick={handleClick}>fetch data</button>
      <div>
        <p>{JSON.stringify(articles)}</p>
      </div>
    </div>
  );
};
