import Page from "../components/Page";
import {FC, ReactNode} from 'react'

const CaseStudyPage: FC <{title: string; children:ReactNode}>= ({ title, children }) => {
  return <Page title={title}>{children}</Page>;
};

export default CaseStudyPage;