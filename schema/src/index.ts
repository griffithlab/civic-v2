const { loadSchema } = require('@graphql-tools/load');
const { loadSchema } = require('@graphql-tools/load');
const { buildClientSchema, graphql } = require('graphql');
const { addMocksToSchema } = require('@graphql-tools/mock');
const { readFileSync } = require('fs');

const civicSchema = readFileSync('./generated/gql.schema.json', 'utf-8');

const schema = buildClientSchema(civicSchema);

const schemaWithMocks = addMocksToSchema({schema});

const query = `
query getPost {
user(id: 6) { title, author }
}
`;

graphql(schemaWithMocks, query).then((result:any) => console.log('Got result', result));

const start = async () => {
    try {
        // fetch schema
        const schema5 = await loadSchema('./src/**/*.graphql', { // load from multiple files using glob
            loaders: [
                new GraphQLFileLoader()
            ]
        });
        // start the server
        await server.start();
        console.log( `Server running at http://localhost:${ port }` );
    } catch ( err ) {
        console.log( err );
        process.exit( 1 );
    }
};

start();
