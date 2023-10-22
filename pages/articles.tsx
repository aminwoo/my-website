import articleData, { ArticleMetadata } from '@/utils/articleData';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import UISwitch from '@/components/UISwitch';

type ArticleDisplayProps = {
  title: string;
  displayImageURL: string;
  summary: string;
};

const Articles = () => {
  return (
    <div className="page">
    <div className={'render-controls'}>
      <UISwitch />
    </div>
    </div>
  );
};

export default Articles;
