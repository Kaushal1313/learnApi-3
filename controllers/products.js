const product = require("../models/product");

const getUser=async(req,res)=>{
    

    const Products=await product.find(req.query).sort("-price");
res.status(200).json({Products});
}

const getItem=async(req,res)=>{
    // filteration for company
    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};
    if (company) {
      queryObject.company = company;
      console.log(queryObject.company);
    }
    if(featured){
        queryObject.featured=featured;
    }
    if(name){
        
        queryObject.name={$regex:name,$options:"i"};

    }
let apiData = product.find(queryObject);

// if user write sort then it will sort other wise it not perfom sorting
    if(sort){
        let sortFix = sort.split(",").join(" ");
        apiData=apiData.sort(sortFix);
    }
    if(select){
        // let selectFix=select.replace(","," ");
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix);
        console.log(apiData);
    }
// Pagination logics
    let page=Number(req.query.page) || 1;
    let limit=Number(req.query.limit)|| 1;
    let skip=(page - 1) * limit;

    apiData=apiData.skip(skip).limit(limit);
    
    console.log(queryObject.name);
    const Products=await apiData;// qwary  for sreching 
    res.status(200).json({Products, nbHits: Products.length}
    )
}

module.exports={getItem,getUser}

