class Grid {
    constructor(options) {
        this.gridArray = []
        this.numberOfRows = options.numberOfRows || 6
        this.numberOfColumns = options.numberOfColumns || 6
        this.gridContainer = document.getElementById("main")
        this.elementId = options.elementId
        this.newRows()

    }


    newRows() {
        for (let rowIndex = 0; rowIndex < this.numberOfRows; rowIndex++) {
            this.rowIndex = rowIndex
            this.rowArray = []
            this.gridArray.push(this.rowArray)
            this.rowElement = document.createElement("div")
            this.rowElement.classList.add("newDiv")
            this.gridContainer.appendChild(this.rowElement)
            for (let columnIndex = 0; columnIndex < this.numberOfColumns; columnIndex++) {
                const cell = new Cell(rowIndex, columnIndex, this.rowElement)
                this.rowArray.push(cell)
            }
        }
    }
}

class Cell {
    constructor(rowIndex, columnIndex, rowParent) {
        this.rowIndex = rowIndex
        this.columnIndex = columnIndex
        this.rowParent = rowParent
        this.createCell()
    }
    createCell() {
        this.cell = document.createElement("span")
        this.rowParent.appendChild(this.cell)
    }
}

const grid = new Grid({
    numberOfRows: 6,
    numberOfColumns: 6,
    parentContainerId: "main",
})