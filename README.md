# Static outbound IP for AWS Lambda
A [serverless](http://serverless.com/) template project of AWS lambda function with static outbound IP.

This project will create a VPC with private subnets and NAT gateway which binded with Elastic IP in public subnet.
The lambda function will run inside a private subnet and all requests from the function will go through NAT Gateway.

## Requirement
- <http://serverless.com/>

## Run it 
```
yarn / npm install
sls deploy
# curl output endpoint, e.g. curl https://XXXXX.execute-api.us-east-1.amazonaws.com/dev/
> {"src_ip":"xx.xx.xx.xx"}
```

## Cleanup
```
sls remove
```
