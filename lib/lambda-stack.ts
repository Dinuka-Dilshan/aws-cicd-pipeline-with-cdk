import { Stack, StackProps } from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

type Props = StackProps & {
  stageName: string;
};

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);

    new NodejsFunction(this, "cicd-lambda", {
      runtime: Runtime.NODEJS_LATEST,
      handler: "handler",
      entry: join(""),
      functionName: `${props.stageName}-cicd-lambda`,
    });
  }
}
