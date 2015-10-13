// PI Drag-n-Drop code for the Form Builder
function FieldFormHandler(mySortables, fieldPrefix, myFieldSetCount) 
{
  this.sortables = mySortables;
  this.fieldSetCount = myFieldSetCount;
  this.optionsShowing = false;
  this.fieldPrefix = fieldPrefix;
     
  this.findNum = function(draggableElement) 
  {                  
    var id    = draggableElement.id;
    if (id == null) return;
       
    var index = id.lastIndexOf('_');
    if (index == null) return;
    return id.substr(index + 1);
  }
     
  this.isPreview = function(element) {
	return (element.innerHTML.length > 100)
  }
	 
     this.isField = function(draggableElement) {
	   var prefix = this.fieldPrefix+'_field_draggable_';
	   var num = this.findNum(draggableElement);
	   
	   return draggableElement.id &&
	          draggableElement.id == prefix + num;      
     }
     
     this.isFieldSet = function(draggableElement) {
       var prefix = 'field_set_';
       var num = this.findNum(draggableElement);
	   
       return draggableElement.id &&
              draggableElement.id == prefix + num;      
     }
     
     this.readyContents = function(element_name, name, num) {
       return $(element_name).innerHTML.replace(/__NUM__/g, num).replace(/__NAME__/g, name);
     }
     
    this.convert = function(draggableElement, prefix) {
      var num = this.findNum(draggableElement);
	   
      //alert(prefix + num);
	    draggableElement.className = $(prefix + num).className;
      draggableElement.innerHTML = $(prefix + num).innerHTML;
	   
      return num;
    }
     
     this.convertToText = function(draggableElement) {
       var num = this.findNum(draggableElement);
       
       //$('field_sample_' + num).innerHTML = draggableElement.innerHTML;
       
       this.convert(draggableElement, this.fieldPrefix+'_field_text_');
     }
     
     this.convertToPreview = function(draggableElement) {
       var num = this.convert(draggableElement, this.fieldPrefix+'_field_sample_');      
     }
     
     this.createSortables = function() {
	   var sections = this.sortables;
	   
	   for(var i = sections.length - 1; i >= 0; i--) {
	     Sortable.create(sections[i],{ tag:'div', treeTag:'div',
	          tree: true,
	          dropOnEmpty:true,
	          containment:sections,
	          only:['field', 'fieldset'],
	          constraint:false}); 
		  }      
     }
     
     this.destroySortables = function() {
	   var sections = this.sortables;
		
	   for(var i = 0; i < sections.length; i++) {
	     Sortable.destroy(sections[i]);
		}             
     }
     
     this.addFieldSet = function(name) {
	   if (name == null || name == "") return;
		
	   var setCount = ++this.fieldSetCount;
		
	   new Insertion.Bottom(this.fieldPrefix+'_selected_fields_list', this.readyContents('sample_field_set', name, setCount));
		
	   this.destroySortables();
	   this.sortables.push('field_set_droppable_' + setCount);
	   this.createSortables();
				
	   $('field_set_' + setCount).style.display = 'none';
	   Effect.Appear('field_set_' + setCount); 
	   
	   if (this.optionsShowing) {
	     toggleDisplay('field_set_options_' + setCount);
	   }    
     }
     
     this.updateFieldSetName = function(name, num) {
       $('field_set_name_' + num).innerHTML = name;     
     }
     
     this.removeField = function(draggableElement) { 
	   Element.remove(draggableElement);
	   this.convertToText(draggableElement);
	   new Insertion.Bottom(this.fieldPrefix+'_available_fields_list', draggableElement);       
     }
     
     this.removeFieldSet = function(draggableElement) {
	   var num = this.findNum(draggableElement);
	   var id = 'field_set_droppable_' + num;
	     
	   var droppable = $(id).childNodes;
	     
	   if (droppable.length > 0) {
	     for (var e=droppable[0] ; e != null ; ) {
	       var f = e.nextSibling;
	        
	       if (this.isField(e))
	         this.removeField(e);
	       else if (this.isFieldSet(e))
	         this.removeFieldSet(e);
	         
	       e = f;
	     }
	   }
	     
	   var arr = [];
	   for (var i=0 ; i < this.sortables.length ; i++) {
	     if (this.sortables[i] != id) {
	       arr.push(this.sortables[i]);
	     }
	   }
	   this.sortables = arr;
	     
	   Element.remove(draggableElement);     
     }
     
     this.remove = function(type, num) {
       if (type == 'field') {                       
         this.removeField($(this.fieldPrefix+'_field_draggable_' + num));
       
       } else if (type == 'fieldset') {
         this.removeFieldSet($('field_set_' + num));       
       }     
     }
     
     this.showOptions = function() {
       this.optionsShowing = !this.optionsShowing;
       this.showOptionsRecurse(this.fieldPrefix+'_selected_fields_list');
     }
     
     this.showOptionsRecurse = function(listId) {
       var vals = $(listId).childNodes;
       
       for (var i=0 ; i < vals.length ; i++) {
         var num = this.findNum(vals[i]);
         var name = null;
         
         if (this.isField(vals[i])) {
           name = 'field_options_' + num;
         
         } else if (this.isFieldSet(vals[i])) {
           name = 'field_set_options_' + num;
           this.showOptionsRecurse('field_set_droppable_' + num);
         }
         
         if (name != null) {
           toggleDisplay(name, this.optionsShowing);
         }
       }
     }
     
     this.serializeList = function(listId, postId) {
       var vals = $(listId).childNodes;

       var arr_count = 0;       
       for (var i=0 ; i < vals.length ; i++) {
         var num = this.findNum(vals[i]);
         var shouldCreate = false
         
         if (this.isField(vals[i])) {
           shouldCreate = true;
         
         } else if (this.isFieldSet(vals[i])) {
           shouldCreate = true;
           
           var name = 'sublist_' + num;
           this.serializeList('field_set_droppable_' + num, name);           
           num = name;
         }
         
         if (shouldCreate) {
           var e = '<input type="hidden" name="fields[' + arr_count + ']" value="' + num + '"/>';
         
           new Insertion.Bottom(this.fieldPrefix+'_field_ordering_hidden_inputs', e);
           arr_count++;
         }
       }
       
       return arr_count;
     }
     
     this.serializeOrdering = function() {
       //tinyMCE.triggerSave = function() {} // Disable saving of tinyMCE fields
       this.serializeList(this.fieldPrefix+'_selected_fields_list', 'root');
     }
     
     this.onStart = function(eventName, draggable, event) {
       // Bug where if the Parent Div has a scroll bar, the created sample element will be misaligned w/ the mouse.
       // We need to tell draggable object to take an offset from our scrollable div's scroll bar position
       if (draggable.element.parentNode.id == this.fieldPrefix+'_available_fields_list')
	       draggable.setScrollOffsetElement(document.getElementById(this.fieldPrefix+'_available_fields_list'));
       else
        draggable.setScrollOffsetElement(null);
     }
     
     this.onDrag = function(eventName, draggable, event) {
	   if (this.isField(draggable.element)) {
	     if ((draggable.element.parentNode.id == this.fieldPrefix+'_selected_fields_list') &&
	         !this.isPreview(draggable.element)) {
	       this.convertToPreview(draggable.element);
		 }
		 
	     if ((draggable.element.parentNode.id != this.fieldPrefix+'_selected_fields_list') &&
	         this.isPreview(draggable.element)) {
	       this.convertToText(draggable.element);
		 }
	   }
	 }
     
     this.onEnd = function(eventName, draggable, event) {
       var parentId = draggable.element.parentNode.id;
      
	   if (this.isField(draggable.element)) {
	     if (parentId == this.fieldPrefix+'_available_fields_list') {
	       this.convertToText(draggable.element);      
	     } 
	     else if (parentId.startsWith(this.fieldPrefix+'_selected') || parentId.startsWith('field_set')) {
           var num = this.findNum(draggable.element);
           toggleDisplay('field_options_' + num, this.optionsShowing);
         }
	   } else if ((this.isFieldSet(draggable.element)) && (parentId == this.fieldPrefix+'_available_fields_list')) {
	     this.removeFieldSet(draggable.element); 
	   }
     }
}