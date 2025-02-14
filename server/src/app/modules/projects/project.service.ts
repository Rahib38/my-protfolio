import { StatusCodes } from "http-status-codes";
import QueryBuilder from "../../builder/querybuilders";
import AppError from "../../Errors/appError";
import { projectsInterface } from "./project.interface";
import { projectModel } from "./project.model";

const projectCreate=async(payload:projectsInterface)=>{
    const result= await projectModel.create(payload)
    return result
}

const getAllProject = async(query:Record<string,unknown>)=>{
    const searchableFields = ['title', 'description'];
    const ProjectQuery = new QueryBuilder(projectModel.find(), query)
  
      .search(searchableFields)
      .filter()
      .sort();
    const result = await ProjectQuery.modelQuery
  
    return result;
}
const singleProject=async(id:string)=>{
    const result =await projectModel.findById(id)
    if(!result){
        throw new AppError(StatusCodes.NOT_FOUND,'This project is not found')
    }
    return result
}


const updateProject = async(id:string,body:projectsInterface)=>{
    const result= await projectModel.findByIdAndUpdate(id,body,{new:true})
    if(!result){
        throw new AppError(StatusCodes.NOT_FOUND,'This project is not found')
 
    } 
    return result
}
const deleteProject = async(id:string)=>{
    const result= await projectModel.findByIdAndDelete(id)
    if(!result){
        throw new AppError(StatusCodes.NOT_FOUND,'This project is not found')
 
    } 
    return result
}

export const projectService={
    projectCreate,getAllProject,singleProject,updateProject,deleteProject
} 