const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  projectId: "blog-app-431208",
  keyFilename: "./gcp_key.json",
});

const uploadToGoogleCloudStorage = async (filepath) => {
  try {
    const gcs = storage.bucket("gs://larios-bucket-1");
    const storagepath = `larios-bucket-1/${filepath}`;

    const result = await gcs.upload(filepath, {
      destination: storagepath,
      public: true,
      metadata: {
        contentType: "application/plain", //application/csv for excel or csv file upload
      },
    });
    return result[0].metadata.mediaLink;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const GoogleCloudService = {
  uploadToGoogleCloudStorage,
};

module.exports = GoogleCloudService;
