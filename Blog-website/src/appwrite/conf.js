import config from '../config/config';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, content, featuredImage, status, userId }) {
        try {
            const post = await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                null, // Let Appwrite generate the document ID
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                },
            );
            return post;
        } catch (error) {
            console.log('Appwrite service :: createPost :: error', error);
            return false;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            const post = await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                },
            );
            return post;
        } catch (error) {
            console.log('Appwrite service :: updatePost :: error', error);
            return false;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            );
            return true;
        } catch (error) {
            console.log('Appwrite service :: deletePost :: error', error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            const post = await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            );
            return post;
        } catch (error) {
            console.log('Appwrite service :: getPost :: error', error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            const posts = await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            );
            return posts;
        } catch (error) {
            console.log('Appwrite service :: getPosts :: error', error);
            return false;
        }
    }

    // upload file services

    async uploadFile(file) {
        try {
            const fileURL = await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file,
            );
            return fileURL;
        } catch (error) {
            console.log('Appwrite service :: uploadFile :: error', error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(config.appwriteBucketId, fileId);
            return true;
        } catch (error) {
            console.log('Appwrite service :: deleteFile :: error', error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(config.appwriteBucketId, fileId).href;
    }
}

const service = new Service();
export default service;
