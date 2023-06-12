# Jump App Frontend based on React

This repository includes a microservice based on React and TypeScript that is a component develop for Jump App application. The idea of this microservice is implement a Frontend which will be able to send HTTP and gRPC request to a respective backend.

The idea of this connection to the backend is to send a JSON or Protobuf object in order to be able to make a set of "jumps" (connection between services) that have been implemented as microservices in different languages (Golang, Python, Java or Quarkus).

Please review the following section for more information about this microservice.
## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## gRPC Support

In order to be able to test some features integrated in Istio (based on Envoy), gRPC support has been implemented. With this new feature, it is possible to sent gRPC request in the same way as HTTP requests.

It is important to bear in mind that a gRPC proxy (E.g. Envoy) is required to handle the gRPC requests and redirect them to the a specific backend. For this reason, the following command will be useful in local testing to make available this envoy service locally:

```$bash
envoy -c local/envoy.yaml
```

NOTE: It is required to install envoy previously. Visit [link](https://www.envoyproxy.io/docs/envoy/latest/start/install) for more information.

Please visit [gRPC Web](https://github.com/grpc/grpc-web) for more information about this integration.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Author Information

Asier Cidon

@RedHat
