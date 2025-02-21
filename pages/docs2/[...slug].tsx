import React, { useState } from "react";
import SideMenu from "components/InsideMenu";
import {
  GetStaticPathsContext,
  InferGetServerSidePropsType,
  GetStaticPropsContext,
} from "next";
import dynamic from "next/dynamic";

const data = [
  { name: "Typescript基础", slug: "/docs2/typescript" },
  // { name: "Typescript进阶", slug: "/docs2/tspro" },
];

type Props = InferGetServerSidePropsType<typeof getStaticProps>;

export default function Page({ slug }: Props) {
  console.log('slug',slug)
  const Content = dynamic(() => import(`docsmd/${slug}/index.mdx`), {
    ssr: false,
  });

  return (
    <div className="flex gap-10">
      <SideMenu data={data} />
      <div className="prose flex-auto max-w-full">
        <Content />
      </div>
    </div>
  );
}

export async function getStaticPaths(context: GetStaticPathsContext) {
  return {
    paths: data.map((item) => ({
      params: {
        slug: [item.slug],
      },
    })),
    fallback: false, // SSG 模式
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string[] }>) {
  const slug = params?.slug.join("/");

  return {
    props: {
      slug,
    }, // 传递给组件的props
  };
}
