import React, { FC } from "react";
import HeaderNavigation from "./components/navigation/header.tsx";
import SideBar from "./components/navigation/sidebar.tsx";

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
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="shortcut icon" href="favicon.png" />
        <link rel="stylesheet" href="style/vendors/feather.css" />
        <link rel="stylesheet" href="style/vendors/themify-icons.css" />
        <link rel="stylesheet" href="style/vendors/vendor.bundle.base.css" />
        <link rel="stylesheet" href="style/vendors/dataTables.bootstrap4.css" />
        <link rel="stylesheet" href="style/vendors/themify-icons.css" />
        <link rel="stylesheet" href="style/vendors/select.dataTables.min.css" />
        <link rel="stylesheet" href="style/style.css"></link>
        <title>Skydash</title>
      </head>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          <HeaderNavigation />
          <SideBar />
          <Page {...pageProps} />
        </div>
      </div>
    </main>
  );
}
