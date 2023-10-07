export class Quiz {
}

export class QuestionDetails{
    id?:number;
    question?:string;
    question_image?:string;
    options?:OptionModel[] = [];
    answer?:string[];
    explanation?:string;
    explanation_image?:string;
}

export class OptionModel{
    id?:number;
    label?:string;
    correct?:boolean = false;
    imageIdSet?:string;
    questionId?:number;
    createdBy?:string;
    updatedBy?:string;
    createdDate?:string;
    updatedDate?:string;
}

export class CreateQuizDialogModel {
    label?:string;
    description?:string;
    time?:string;
    active?:boolean;
    hours?:number;
    minutes?:number;
}
export class QuizModel{
    id!:number;
    label?:string;
    description?:string;
    time?:string;
    active?:boolean;
    institutionId?:number;
    questionSet?:Set<QuizQuestionModel>;
    directionQuestionSet?:Set<DirectionQuestionModel>;
    createdBy?:string;
    updatedBy?:string;
    createdDate?:string;
    updatedDate?:string;
}

export class QuizQuestionModel{
    id?:number;
    question?:string;
    imageIdSet?:string;
    solution?:string;
    category?:string;
    difficultyLevel?:number;
    quizId?:number;
    // directionQuestionEntity?:DirectionQuestionModel;
    options?:OptionModel[];
    createdBy?:string;
    updatedBy?:string;
    createdDate?:string;
    updatedDate?:string;
}

export class DirectionQuestionModel{
    id?:number;
    directionDesc?:string;
    commonSolution?:string;
    quizId?:number;
    questionEntitySet?:QuizQuestionModel[];
    caseEntitySet?:CaseModel[];
    institutionId?:number;
    createdBy?:string;
    updatedBy?:string;
    createdDate?:string;
    updatedDate?:string;
}

export class CaseModel{
    id?:number;
    label?:string;
    caseDesc?:string;
    position?:number;
    imagePath?:string;
    institutionId?:number;
    createdBy?:string;
    updatedBy?:string;
    createdDate?:string;
    updatedDate?:string;
}

// export class TakeQuizModel{
//     id?:number;
//     userId?:number;
//     institutionId?:number;
//     quizId?:number;
//     dqIdList:DqQuestionOrderMap[] = [];
//     gqIdList:GqQuestionOrderMap[] = [];

// }

export class DqQuestionOrderMap{
    dqId?:number;
    orderIndex?:number;
}

export class GqQuestionOrderMap{
    gqId?:number;
    orderIndex?:number;
}

export class TakeQuizModel{

    id?:number;
    institutionId?:number;
    pIndex:number | undefined;// present index
    quizId!:number;
    userId?:number;
    quizTime?:String;
    timeSpent?:String;
    dqOrderList:String = '';
    gqOrderList:String = '';
    userGqMap:Map<number,UserQuestionAnswer> = new Map();
    dqList?:DirectionQuestionModel[] = [];
    gqList?:QuizQuestionModel[] = [];
    // userGqMap?:Map<number,UserQuestionAnswer> = new Map();
    // dqObjMap?:Map<number,DirectionQuestionModel> = new Map();
    // gqObjMap?:Map<number,QuizQuestionModel> = new Map();
    updatedBy?:String;
    createdDate?:String;
    updatedDate?:String;

    dqIdList?:any[];
    gqIdList?:any[];

    converStringListToObjList(val:String):any[]{
        return val.replace("[","").replace("]","").split(",");
      }

     getDqIdList(){
       this.dqIdList = this.converStringListToObjList(this.dqOrderList);
     } 

     getGqIdList(){
        this.gqIdList = this.converStringListToObjList(this.gqOrderList);
    } 

    clearAns(index:number){
        this.userGqMap!.get(index)!.attempted = false;
        this.userGqMap!.get(this.pIndex!)!.userOptionAnsRadioBtn = null;
        if(this.pIndex) {this.userGqMap.get(this.pIndex)!.userOptionAnsCheckBox = new Map();}
    }
}

export class UserQuestionAnswer{
    
    id?:number;
    qOrderIndex?:number;
    questId!:number;
    dqId!:number;
    questObj?:QuizQuestionModel;
    dqObj?:DirectionQuestionModel;
    userId?:number;
    takeQuizId?:number;
    attempted?:boolean;
    userOptionAnsCheckBox?:Map<number,OptionModel> = new Map();
    userOptionAnsRadioBtn?:OptionModel | null;
}

export class UserOptionAnswered{
    id?:number;
    questionId?:number;
    optionid?:number;
    isCorrect?:boolean;
}

export class QuizResult{
    quizId!: number;
    userId!: number;
    instId!: number;
    totalQuestions!: number;
    attemptedQsns!: number;
    totalCorrectAns!: number;
    totalWrongAns!: number;
    totalRefrain!: number;
    totalScored!: number;
    fullSore!: number;
    createdBy!: string;
    createdDate!: string;
}

export class LabelValue{
    label!: String;
    value!: String;
}