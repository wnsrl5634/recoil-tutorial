import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FetchDataExample } from './FetchDataExample';
import { ErrorFallback } from './ErrorFallback';
import { FetchDataWithQueryExample } from './FetchDataWithQueryExample';
import { CreateSelectorExample } from './CreateSelectorExample';
import { FetchErrorData } from './FetchErrorData';
import { QueryRefreshExample } from './QueryRefreshExample';

export const AsyncExample = () => {
  return (
    <div>
      <hr />
      <h1>async basic example</h1>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>loading...</div>}>
          <FetchDataExample />
        </Suspense>
      </ErrorBoundary>
      <hr />
      <h1>error state example</h1>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>loading...</div>}>
          <FetchErrorData />
        </Suspense>
      </ErrorBoundary>
      <hr />
      <h1>async example with query parameter</h1>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>loading...</div>}>
          <FetchDataWithQueryExample />
        </Suspense>
      </ErrorBoundary>
      <hr />
      <h1>create state selector</h1>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>loading...</div>}>
          <CreateSelectorExample />
        </Suspense>
      </ErrorBoundary>
      <hr />
      <h1>query refresh</h1>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>loading...</div>}>
          <QueryRefreshExample />
        </Suspense>
      </ErrorBoundary>
      <hr />
    </div>
  );
};
