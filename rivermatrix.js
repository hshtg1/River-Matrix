var size = 0;
function riverSizes(matrix) {
	//Initialize
	const result = []; //empty waiting for result
const explored_fields = matrix.map(row => row.map(value => false)); // this is saving me 15 lines xd
  for(let i = 0; i < matrix.length; i++) {
   for(let j = 0; j < matrix[i].length; j++) {
		 if(explored_fields[i][j]) continue;
		visitNode(i, j, matrix, explored_fields);
		 if(size >0){
			result.push(size);
			size = 0;
		}
		}
   }
	if(size >0){
			result.push(size);
			size = 0;
		}
	return result;
}

function visitNode(i, j, matrix, explored_fields){
	if(!explored_fields[i][j]){
			explored_fields[i][j] = true;
	if(matrix[i][j] === 1){
		size++;
		//Visiting neighbours
	 let visit = getUnvisitedNeighbours(i, j, matrix, explored_fields);
	 visitNeighbours(visit, i, j, matrix, explored_fields);
	   }
}
}
function getUnvisitedNeighbours(i, j, matrix, explored_fields){
	const unvisited = []
	if(i > 0 && !explored_fields[i-1][j]) unvisited.push([i-1, j])
  if(j > 0 && !explored_fields[i][j-1]) unvisited.push([i, j-1])
	if(j < matrix[0].length - 1 && !explored_fields[i][j+1]) unvisited.push([i, j+1])
	if(i < matrix.length - 1 && !explored_fields[i+1][j]) unvisited.push([i + 1, j])
	return unvisited;
}

function visitNeighbours(toVisit, i, j, matrix, explored_fields){
	//for loop traverse nodes
	for(i = 0; i < toVisit.length; i++){
		//The problems are here
		currentNode = toVisit.pop();
		var i = currentNode[0];
		var j = currentNode[1];
		visitNode(i,j, matrix, explored_fields);
	}
}
// Do not edit the line below.
exports.riverSizes = riverSizes;