class DragAndDrop {
  /**
   * Init with component
   */
  public constructor(
    private component: React.Component<any>,
    private onChange
  ) {}

  /**
   * Is dragging over drop zone
   */
  public isOnDropZone: boolean = false;

  /**
   * Set state and update
   */
  private setState = payload => (
    Object.assign(this, payload), this.component.forceUpdate()
  );

  /*
   *  Handle over event on container
   * */
  private onDragOver = event => {
    const { isOnDropZone } = this;

    event.preventDefault();

    if (!isOnDropZone) this.setState({ isOnDropZone: true });
  };

  /*
   *  Handle drop event on container
	 */
  private onDrop = event => {
    event.preventDefault();
    event.stopPropagation();

    this.onChange(Array.from<File>(event.dataTransfer.files));

    this.setState({ isOnDropZone: false });
  };
	/*
  *  Handle leave event from container
	*/
  private onDragLeave = event => {
    event.preventDefault();

    this.setState({ isDragging: false });
	};
	
	/**
	 * Return prop handlers
	 */
	public get handlers() {
		const {
			onDragLeave,
			onDragOver,
			onDrop
		} = this;

		return {
			onDragLeave,
			onDragOver,
			onDrop
		}
	}
}



export {DragAndDrop}