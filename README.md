![project status](https://img.shields.io/badge/status-demo-orange.svg)

# GraphQL Yoga demo

This example shows how you can simply map one GraphQL model to another and how you can combine tow models to one GrahpQL model using [Yoga](https://github.com/prisma-labs/graphql-yoga)

## TL:TR

```
git clone https://github.com/npalm/graphql-prisma-demo.git --recurse-submodules
./start.sh
```
Now point your browser to the [GraphQL Playground](http://localhost:4000)

## 

This GraphQL demo is using yoga to combine the GraphQL model of two applications build using [Prisma](https://www.prisma.io/). The first application has a domain model of conferences, talks, speakers and comments. The second application is a touristy information model that is currently limited to store information about cities and some craft beer bars. 

### The conference app

The conference app can store information about talks and speakers on a conference based on the next model. 
![model-talks](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/npalm/graphql-prisma-yoga-demo/master/doc/model-talks.plantuml&counter=1)

After starting the demo you can access this service via [http://localhost:4466/](http://localhost:4466/) and execute a query like.
```graphql
query {
  conferences {
    name
    city
    talks {
      title
      speakers {
        name
      }
    }
  }
}
```

### The touristy app

The touristy app can store cities and some cool bars based on the next model.

![model-cities](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/npalm/graphql-prisma-yoga-demo/master/doc/model-cities.plantuml&counter=1)


After starting the demo you can access this service via [http://localhost:4467/](http://localhost:4467/) and execute a query like.
```graphql
query {
  cities {
    name
    bars {
      name
    }
  }
}
```

### Yoga app
With the yoga app we combine the model to one model. So you can find for the city where a conference is some touristy information. Besides that the conference app is actually based on a [Spring Boot GraphqQL example](https://github.com/npalm/graphql-java-demo). Which has a slight different schema. The schema of the conference app is generated via prisma based on a data structure. With yoga we can map the schema on one of our choice. In this case the same as used in the Spring Boot example. 


After starting the demo you can access this service via [http://localhost:4000/](http://localhost:4000/) and execute a query like.
```graphql
query {
  conferences {
    name
    location {
      name
      bars {
        name
      }
    }
  }
}
```

### Required software
- Node 10+
- docker and docker-compose

### Start

Just run the start script, it will spin up docker containers for prisma and the database. Once up, prisma is deployed and some data is loaded via npm.

```
./start.sh
```

### Stop (clean)

Just run the stop script.

```
./stop.sh
```
