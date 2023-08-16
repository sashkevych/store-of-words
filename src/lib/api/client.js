import { ID,KEY,EMAIL } from '$env/static/private';

import { BigQuery } from "@google-cloud/bigquery";
import { Storage } from "@google-cloud/storage";


const credentials = {
    project_id: ID,
    private_key: KEY,
    client_email: EMAIL,
  };


export const bigquery = new BigQuery({credentials: credentials});
export const storage = new Storage({credentials: credentials});


