import Head from 'next/head';
import React from 'react';
import UISwitch from '@/components/UISwitch';

const LinksToOtherSites = () => {
  return (
    <div className="page">
      <Head>
        <title>Links</title>
        <meta name="description" content="Links for Ben's related accounts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={'render-controls'}>
        <UISwitch />
      </div>
      <h1 className="links-title">Links</h1>
      <div className="links">
        <a target="_blank" rel="noreferrer" href={'https://github.com/aminwoo/'}>
          <div className="link">
            <div>
              <h2>GitHub</h2>
              <p>
                Visit my GitHub to see some of the code for my personal projects, open source
                contributions and the code for this website!
              </p>
            </div>
          </div>
        </a>
        <hr></hr>
        <a
          target="_blank"
          rel="noreferrer"
          href={'https://www.linkedin.com/in/ben-woo/'}
        >
          <div className="link">
            <div>
              <h2>LinkedIn</h2>
              <p>
                Connect with me on LinkedIn to see updates or to chat about anything software,
                systems and AI.
              </p>
            </div>
          </div>
        </a>
        <hr></hr>
      </div>
    </div>
  );
};

export default LinksToOtherSites;
