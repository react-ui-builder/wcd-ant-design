# Library project with Ant Design components for the React UI Builder platform

Since React UI Builder is based on a visual Web application builder - [Webcodesk](https://github.com/webcodesk/webcodesk-srv), we use Webcodesk to create the component library locally.

### The instruction for creating components:

1. Fork this repository on GitHub.

2. Clone your repo to the local disk and run `yarn install` command in the command line.

3. Run Webcodesk server with the `yarn wcd` command in the command line. Then open the `http://localhost:7070` address in the browser.

4. Now you can create your own component in the favorite source code editor. All source codes for components should be in the `/src/usr` directory.

**Please note:** We understand that you may already have a ready-made component library or you are going to publish a library based on some popular component package that already exists.
But due to the fact that all components have different implementation approaches, and may differ in the description of properties in code, we propose to create wrappers for components using TypeScript and PropTypes to unify the description of properties.

So please find the sample source code for component wrappers in the `/src/usr/sample` directory of this project. Create your new components using these samples as the templates.

5. Switch to the Webcodesk tab in the browser and find your component in the `Components` section in the left panel.

> Read more about how to create reusable components in Webcodesk here: [Webcodesk User Guide](https://github.com/webcodesk/webcodesk-srv/blob/master/docs/README.md) 

6. Create PR to the master branch in this repository.

## Community

If you need any help or want someone to set up the library project with you and get you stepping through code in your IDE, 
don't be afraid to speak up!

You can ask questions or talk about React UI Builder at [Spectrum chat](https://spectrum.chat/react-ui-builder)

## License

MIT License

Copyright (C) 2020 React UI Builder Team.