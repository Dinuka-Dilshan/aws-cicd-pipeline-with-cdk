#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import "source-map-support/register";
import { CdkCicdStack } from "../lib/cdk-cicd-stack";

const app = new cdk.App();
new CdkCicdStack(app, "CdkCicdStack", {});
