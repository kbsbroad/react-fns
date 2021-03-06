import * as React from "react";
import { SharedRenderProps } from "../types";
const M = require("react-media");

export const Media: React.SFC<SharedRenderProps<MediaProps>> = M;

export interface MediaProps {
  matches: boolean;
}
