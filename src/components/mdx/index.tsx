import type { MDXComponents } from "mdx/types";

import { SlideH1, SlideH2, SlideH3 } from "./typography/Headings";
import { SlideBlockquote } from "./typography/Blockquote";
import { SlideHr, SlideAnchor } from "./typography/InlineElements";
import { SlideUl, SlideOl, SlideLi } from "./typography/Lists";
import { SlideParagraph } from "./typography/Paragraph";
import { SlideCode, SlidePreCode } from "./CodeBlock";
import { SlideImage } from "./SlideImage";
import { SlideTable, SlideTh, SlideTd } from "./SlideTable";

import { CardGrid } from "./layout/CardGrid";
import { Center } from "./layout/Center";
import { Columns, Column } from "./layout/Columns";

import { Badge } from "./Badge";
import { Callout } from "./Callout";
import { Card } from "./Card";
import { Chart } from "./Chart";
import { Divider } from "./Divider";
import { Fragment } from "./Fragment";
import { Icon } from "./Icon";
import { Shape } from "./Shape";
import { Stat } from "./Stat";
import { Steps, Step } from "./Steps";
import { Timeline, TimelineItem } from "./Timeline";
import { Video } from "./Video";

export const slideComponents: MDXComponents = {
  // Typography
  h1: SlideH1,
  h2: SlideH2,
  h3: SlideH3,
  p: SlideParagraph,
  blockquote: SlideBlockquote,
  code: SlideCode,
  pre: SlidePreCode,
  img: SlideImage,
  table: SlideTable,
  th: SlideTh,
  td: SlideTd,
  ul: SlideUl,
  ol: SlideOl,
  li: SlideLi,
  hr: SlideHr,
  a: SlideAnchor,
  // Layout
  Columns,
  Column,
  Center,
  CardGrid,
  // Content
  Card,
  Stat,
  Timeline,
  TimelineItem,
  Steps,
  Step,
  Callout,
  Badge,
  Divider,
  // Media & Data
  Chart,
  Icon,
  Shape,
  Video,
  Fragment,
};
