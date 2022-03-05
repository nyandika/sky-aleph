import React, { FC } from 'react';

export default function App({
  Page,
  pageProps,
}: {
  Page: FC;
  pageProps: Record<string, unknown>;
}) {
  return (
    <main>
      <head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <link rel='shortcut icon' href='favicon.png' />
        <link rel='stylesheet' href='style/vendors/feather.css' />
        <link rel='stylesheet' href='style/vendors/themify-icons.css' />
        <link rel='stylesheet' href='style/vendors/vendor.bundle.base.css' />
        <link rel='stylesheet' href='style/vendors/dataTables.bootstrap4.css' />
        <link rel='stylesheet' href='style/vendors/themify-icons.css' />
        <link rel='stylesheet' href='style/vendors/select.dataTables.min.css' />
        <link rel='stylesheet' href='style/style.css'></link>
      </head>
      <Page {...pageProps} />
    </main>
  );
}
