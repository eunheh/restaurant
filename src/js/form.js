

	import $ from "jquery";


	function renderRes(item){
	return `

	<form>

		Full Name

			<input type="text" name="Full Name" ca>

		Number Of Guests

			<input type="number"  name="Number of Guests">

		Date

			<input type="date" name="Date">

		Special Notes

			<textarea class></textarea>


	</form>

		Seating Preference

			<select> name = "Seating Preference

				<option value = "Indoor">Indoor</option>
				<option value = "Outdoor">Outdoor</option>

			</select>


	<input type="button" onclick = "alert('Your Reservation is Confirmed!') 

	value = "Reserve Table">  `
};


export{renderRes};
