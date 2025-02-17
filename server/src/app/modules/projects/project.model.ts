import { model, Schema } from 'mongoose';
import { projectsInterface } from './project.interface';

const projectSchema = new Schema<projectsInterface>(
  {
    title: {
      type: String,
      required: [true, 'Name field is required'],
    },
    image: {
      type: String,
      required: [true, 'Image field is required'],
    },
    description: {
      type: String,
      required: [true, 'Description field is required'],
    },
    githubLink: {
      type: String,
      required: [true, 'githubLink field is required'],
    },
    liveLink: {
      type: String,
      required: [true, 'githubLink field is required'],
    },
    technologies: {
      type: String,
      required: [true, 'technologies field is required'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const projectModel=model<projectsInterface>('projects',projectSchema)