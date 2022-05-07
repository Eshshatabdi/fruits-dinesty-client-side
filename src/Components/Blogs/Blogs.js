import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-2'>
            <div className="col-md-12">
                <div className="card my-5">
                    <h4 className='text-success'> 1.Difference between javascript and node js?</h4>
                    <p>Ans:
                        JavaScripts is a programming language used to create web Scripts while Node.js is a JavaScript interpreter and environment that includes some number of useful libraries. JavaScripts are mainly used for building front-end web applications or client-side development, however Node.js is used for back-end or server-side development. Furthermore, JavaScripts can only be run in the browser, but Node.js can be run outside the browser. Additionally, JavaScripts capable enough to add HTML and play with DOM, on the other hand, Node.js doesn't have the capability to add HTML tags.JavaScript can run in any engin, including Spider Monkey (FireFox),
                        JavaScript Core (Safari), and V8 (Google Chrome), whereas Node JS can only run in the V8 engine, which is primarily used by Google Chrome.
                    </p>
                </div>
                <div className="col-md-12">
                    <div className="card mb-5">

                        <h4 className='text-success' >2.When should you use node js and when should you mongodb?</h4>
                        <p>Ans:Node.js used when any project needs programming environment and a runtime library that offers you basic programming supports and can compliance code. As a result iy we want to write some kind of stand-alone program or server in JavaScripts, then we can used Node.js as well. Node.js is also a comprehensive solution for full-stack development. Node.js language is spoken by front-end and back-end developers which make for a more effective and better coordinated working environment.
                            However, MongoDB can be used when application needs the ability to persistently store data in a way that we can efficiently query or update it later. Add to that, it should be used for Schema-less design. Furthermore, when we need Scalability in managing Tera bytes of data
                            Rapid replicaSet with high availability feature we shoulduse MongoDB. MongoDB Sharding enables linear and scale out growth without running out of budget Support high write load Use of Data locality for query processing.
                        </p>

                    </div>
                </div>
                <div className="col-md-12">

                    <div className="card">
                        <h4 className='text-success'>3.What is the difference between sql and nosql?</h4>
                        <p>Ans:SQL databases are primarily referred to as Relational Databases
                            Whereas NoSQL databases are primarily referred to as Non-relational or Distributed Database. SQL databases are table based databases but, NoSQL databases are document based, key-value pairs, graph databases.
                            SQL have dynamic schema however NoSQL have predefined schema.
                            SQL are vertically scalable while NoSQL
                            are horizontally scalable.
                            SQL a good fit for the complex query intensive environment however NoSQL Not ideal for complex queries.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blogs;