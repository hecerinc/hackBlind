# API Documentation for BlindMap



- Store maps with a uid
- Retrieve map with a uid

```
api/v1.0/maps/store/uuid/?api_key=
api/v1.0/maps/get/uuid/
```

- Get directions from node A to node B

```
api/v1.0/edge/:uuid/:nodea/:nodeb
```


```
{
	_id: 2928442,
	uuid: 328428420,
	location_name: "Azucar Morena",
	landmarks: [
		{
			id: 10391
			name: "entrance",
			gps_loc: {
				lon: -100.138902,
				lat: 25.0139201
			}
		}
	]
	edges: [
		{
			startNode: :nodeAId,
			endNode: :nodeBId,
			direction: ?, // what is this
			accuracyIndex: 0.645,
			distance: 2.7, // in meters
		},
	]
	
}
```
