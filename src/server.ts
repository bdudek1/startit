// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START app]
import express from 'express';

const app = express();

// importing controller
// import * as formController from './controller/formController';
import getUser from './controller/helloController.js';
import { getForm, postForm } from './controller/formController.js';

// [START enable_parser]
// This middleware is available in Express v4.16.0 onwards
app.use(express.urlencoded({extended: true}));
app.get("/", getUser);
app.get("/submit", getForm);
app.post("/submit", postForm);
// [END enable_parser]

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
// [END app]

export default app;
