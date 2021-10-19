/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = never
type ZEUS_UNIONS = never

export type ValueTypes = {
    /** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
["Int_comparison_exp"]: {
	_eq?:number | null,
	_gt?:number | null,
	_gte?:number | null,
	_in?:number[],
	_is_null?:boolean | null,
	_lt?:number | null,
	_lte?:number | null,
	_neq?:number | null,
	_nin?:number[]
};
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
	_eq?:string | null,
	_gt?:string | null,
	_gte?:string | null,
	/** does the column match the given case-insensitive pattern */
	_ilike?:string | null,
	_in?:string[],
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?:string | null,
	_is_null?:boolean | null,
	/** does the column match the given pattern */
	_like?:string | null,
	_lt?:string | null,
	_lte?:string | null,
	_neq?:string | null,
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?:string | null,
	_nin?:string[],
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?:string | null,
	/** does the column NOT match the given pattern */
	_nlike?:string | null,
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?:string | null,
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?:string | null,
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?:string | null,
	/** does the column match the given SQL regular expression */
	_similar?:string | null
};
	/** columns and relationships of "meetup" */
["meetup"]: AliasType<{
	created_at?:true,
	datetime?:true,
	description?:true,
	id?:true,
	image_url?:true,
	location?:true,
meetup_comments?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_comment_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_comment_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_comment_bool_exp"] | null},ValueTypes["meetup_comment"]],
meetup_comments_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_comment_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_comment_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_comment_bool_exp"] | null},ValueTypes["meetup_comment_aggregate"]],
meetup_users?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_user_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_user_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_user_bool_exp"] | null},ValueTypes["meetup_user"]],
meetup_users_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_user_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_user_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_user_bool_exp"] | null},ValueTypes["meetup_user_aggregate"]],
	name?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** aggregated selection of "meetup" */
["meetup_aggregate"]: AliasType<{
	aggregate?:ValueTypes["meetup_aggregate_fields"],
	nodes?:ValueTypes["meetup"],
		__typename?: true
}>;
	/** aggregate fields of "meetup" */
["meetup_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["meetup_avg_fields"],
count?: [{	columns?:ValueTypes["meetup_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["meetup_max_fields"],
	min?:ValueTypes["meetup_min_fields"],
	stddev?:ValueTypes["meetup_stddev_fields"],
	stddev_pop?:ValueTypes["meetup_stddev_pop_fields"],
	stddev_samp?:ValueTypes["meetup_stddev_samp_fields"],
	sum?:ValueTypes["meetup_sum_fields"],
	var_pop?:ValueTypes["meetup_var_pop_fields"],
	var_samp?:ValueTypes["meetup_var_samp_fields"],
	variance?:ValueTypes["meetup_variance_fields"],
		__typename?: true
}>;
	/** aggregate avg on columns */
["meetup_avg_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "meetup". All fields are combined with a logical 'AND'. */
["meetup_bool_exp"]: {
	_and?:ValueTypes["meetup_bool_exp"][],
	_not?:ValueTypes["meetup_bool_exp"] | null,
	_or?:ValueTypes["meetup_bool_exp"][],
	created_at?:ValueTypes["timestamptz_comparison_exp"] | null,
	datetime?:ValueTypes["timestamptz_comparison_exp"] | null,
	description?:ValueTypes["String_comparison_exp"] | null,
	id?:ValueTypes["Int_comparison_exp"] | null,
	image_url?:ValueTypes["String_comparison_exp"] | null,
	location?:ValueTypes["String_comparison_exp"] | null,
	meetup_comments?:ValueTypes["meetup_comment_bool_exp"] | null,
	meetup_users?:ValueTypes["meetup_user_bool_exp"] | null,
	name?:ValueTypes["String_comparison_exp"] | null,
	updated_at?:ValueTypes["timestamptz_comparison_exp"] | null
};
	/** columns and relationships of "meetup_comment" */
["meetup_comment"]: AliasType<{
	id?:true,
	/** An object relationship */
	meetup?:ValueTypes["meetup"],
	meetup_id?:true,
	text?:true,
	/** An object relationship */
	user?:ValueTypes["user"],
	user_id?:true,
		__typename?: true
}>;
	/** aggregated selection of "meetup_comment" */
["meetup_comment_aggregate"]: AliasType<{
	aggregate?:ValueTypes["meetup_comment_aggregate_fields"],
	nodes?:ValueTypes["meetup_comment"],
		__typename?: true
}>;
	/** aggregate fields of "meetup_comment" */
["meetup_comment_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["meetup_comment_avg_fields"],
count?: [{	columns?:ValueTypes["meetup_comment_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["meetup_comment_max_fields"],
	min?:ValueTypes["meetup_comment_min_fields"],
	stddev?:ValueTypes["meetup_comment_stddev_fields"],
	stddev_pop?:ValueTypes["meetup_comment_stddev_pop_fields"],
	stddev_samp?:ValueTypes["meetup_comment_stddev_samp_fields"],
	sum?:ValueTypes["meetup_comment_sum_fields"],
	var_pop?:ValueTypes["meetup_comment_var_pop_fields"],
	var_samp?:ValueTypes["meetup_comment_var_samp_fields"],
	variance?:ValueTypes["meetup_comment_variance_fields"],
		__typename?: true
}>;
	/** order by aggregate values of table "meetup_comment" */
["meetup_comment_aggregate_order_by"]: {
	avg?:ValueTypes["meetup_comment_avg_order_by"] | null,
	count?:ValueTypes["order_by"] | null,
	max?:ValueTypes["meetup_comment_max_order_by"] | null,
	min?:ValueTypes["meetup_comment_min_order_by"] | null,
	stddev?:ValueTypes["meetup_comment_stddev_order_by"] | null,
	stddev_pop?:ValueTypes["meetup_comment_stddev_pop_order_by"] | null,
	stddev_samp?:ValueTypes["meetup_comment_stddev_samp_order_by"] | null,
	sum?:ValueTypes["meetup_comment_sum_order_by"] | null,
	var_pop?:ValueTypes["meetup_comment_var_pop_order_by"] | null,
	var_samp?:ValueTypes["meetup_comment_var_samp_order_by"] | null,
	variance?:ValueTypes["meetup_comment_variance_order_by"] | null
};
	/** input type for inserting array relation for remote table "meetup_comment" */
["meetup_comment_arr_rel_insert_input"]: {
	data:ValueTypes["meetup_comment_insert_input"][],
	/** on conflict condition */
	on_conflict?:ValueTypes["meetup_comment_on_conflict"] | null
};
	/** aggregate avg on columns */
["meetup_comment_avg_fields"]: AliasType<{
	id?:true,
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by avg() on columns of table "meetup_comment" */
["meetup_comment_avg_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** Boolean expression to filter rows from the table "meetup_comment". All fields are combined with a logical 'AND'. */
["meetup_comment_bool_exp"]: {
	_and?:ValueTypes["meetup_comment_bool_exp"][],
	_not?:ValueTypes["meetup_comment_bool_exp"] | null,
	_or?:ValueTypes["meetup_comment_bool_exp"][],
	id?:ValueTypes["Int_comparison_exp"] | null,
	meetup?:ValueTypes["meetup_bool_exp"] | null,
	meetup_id?:ValueTypes["Int_comparison_exp"] | null,
	text?:ValueTypes["String_comparison_exp"] | null,
	user?:ValueTypes["user_bool_exp"] | null,
	user_id?:ValueTypes["Int_comparison_exp"] | null
};
	/** unique or primary key constraints on table "meetup_comment" */
["meetup_comment_constraint"]:meetup_comment_constraint;
	/** input type for incrementing numeric columns in table "meetup_comment" */
["meetup_comment_inc_input"]: {
	id?:number | null,
	meetup_id?:number | null,
	user_id?:number | null
};
	/** input type for inserting data into table "meetup_comment" */
["meetup_comment_insert_input"]: {
	id?:number | null,
	meetup?:ValueTypes["meetup_obj_rel_insert_input"] | null,
	meetup_id?:number | null,
	text?:string | null,
	user?:ValueTypes["user_obj_rel_insert_input"] | null,
	user_id?:number | null
};
	/** aggregate max on columns */
["meetup_comment_max_fields"]: AliasType<{
	id?:true,
	meetup_id?:true,
	text?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by max() on columns of table "meetup_comment" */
["meetup_comment_max_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	meetup_id?:ValueTypes["order_by"] | null,
	text?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** aggregate min on columns */
["meetup_comment_min_fields"]: AliasType<{
	id?:true,
	meetup_id?:true,
	text?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by min() on columns of table "meetup_comment" */
["meetup_comment_min_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	meetup_id?:ValueTypes["order_by"] | null,
	text?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** response of any mutation on the table "meetup_comment" */
["meetup_comment_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["meetup_comment"],
		__typename?: true
}>;
	/** on conflict condition type for table "meetup_comment" */
["meetup_comment_on_conflict"]: {
	constraint:ValueTypes["meetup_comment_constraint"],
	update_columns:ValueTypes["meetup_comment_update_column"][],
	where?:ValueTypes["meetup_comment_bool_exp"] | null
};
	/** Ordering options when selecting data from "meetup_comment". */
["meetup_comment_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	meetup?:ValueTypes["meetup_order_by"] | null,
	meetup_id?:ValueTypes["order_by"] | null,
	text?:ValueTypes["order_by"] | null,
	user?:ValueTypes["user_order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: meetup_comment */
["meetup_comment_pk_columns_input"]: {
	id:number
};
	/** select columns of table "meetup_comment" */
["meetup_comment_select_column"]:meetup_comment_select_column;
	/** input type for updating data in table "meetup_comment" */
["meetup_comment_set_input"]: {
	id?:number | null,
	meetup_id?:number | null,
	text?:string | null,
	user_id?:number | null
};
	/** aggregate stddev on columns */
["meetup_comment_stddev_fields"]: AliasType<{
	id?:true,
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by stddev() on columns of table "meetup_comment" */
["meetup_comment_stddev_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** aggregate stddev_pop on columns */
["meetup_comment_stddev_pop_fields"]: AliasType<{
	id?:true,
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by stddev_pop() on columns of table "meetup_comment" */
["meetup_comment_stddev_pop_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** aggregate stddev_samp on columns */
["meetup_comment_stddev_samp_fields"]: AliasType<{
	id?:true,
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by stddev_samp() on columns of table "meetup_comment" */
["meetup_comment_stddev_samp_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** aggregate sum on columns */
["meetup_comment_sum_fields"]: AliasType<{
	id?:true,
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by sum() on columns of table "meetup_comment" */
["meetup_comment_sum_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** update columns of table "meetup_comment" */
["meetup_comment_update_column"]:meetup_comment_update_column;
	/** aggregate var_pop on columns */
["meetup_comment_var_pop_fields"]: AliasType<{
	id?:true,
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by var_pop() on columns of table "meetup_comment" */
["meetup_comment_var_pop_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** aggregate var_samp on columns */
["meetup_comment_var_samp_fields"]: AliasType<{
	id?:true,
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by var_samp() on columns of table "meetup_comment" */
["meetup_comment_var_samp_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** aggregate variance on columns */
["meetup_comment_variance_fields"]: AliasType<{
	id?:true,
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by variance() on columns of table "meetup_comment" */
["meetup_comment_variance_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** unique or primary key constraints on table "meetup" */
["meetup_constraint"]:meetup_constraint;
	/** input type for incrementing numeric columns in table "meetup" */
["meetup_inc_input"]: {
	id?:number | null
};
	/** input type for inserting data into table "meetup" */
["meetup_insert_input"]: {
	created_at?:ValueTypes["timestamptz"] | null,
	datetime?:ValueTypes["timestamptz"] | null,
	description?:string | null,
	id?:number | null,
	image_url?:string | null,
	location?:string | null,
	meetup_comments?:ValueTypes["meetup_comment_arr_rel_insert_input"] | null,
	meetup_users?:ValueTypes["meetup_user_arr_rel_insert_input"] | null,
	name?:string | null,
	updated_at?:ValueTypes["timestamptz"] | null
};
	/** aggregate max on columns */
["meetup_max_fields"]: AliasType<{
	created_at?:true,
	datetime?:true,
	description?:true,
	id?:true,
	image_url?:true,
	location?:true,
	name?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["meetup_min_fields"]: AliasType<{
	created_at?:true,
	datetime?:true,
	description?:true,
	id?:true,
	image_url?:true,
	location?:true,
	name?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "meetup" */
["meetup_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["meetup"],
		__typename?: true
}>;
	/** input type for inserting object relation for remote table "meetup" */
["meetup_obj_rel_insert_input"]: {
	data:ValueTypes["meetup_insert_input"],
	/** on conflict condition */
	on_conflict?:ValueTypes["meetup_on_conflict"] | null
};
	/** on conflict condition type for table "meetup" */
["meetup_on_conflict"]: {
	constraint:ValueTypes["meetup_constraint"],
	update_columns:ValueTypes["meetup_update_column"][],
	where?:ValueTypes["meetup_bool_exp"] | null
};
	/** Ordering options when selecting data from "meetup". */
["meetup_order_by"]: {
	created_at?:ValueTypes["order_by"] | null,
	datetime?:ValueTypes["order_by"] | null,
	description?:ValueTypes["order_by"] | null,
	id?:ValueTypes["order_by"] | null,
	image_url?:ValueTypes["order_by"] | null,
	location?:ValueTypes["order_by"] | null,
	meetup_comments_aggregate?:ValueTypes["meetup_comment_aggregate_order_by"] | null,
	meetup_users_aggregate?:ValueTypes["meetup_user_aggregate_order_by"] | null,
	name?:ValueTypes["order_by"] | null,
	updated_at?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: meetup */
["meetup_pk_columns_input"]: {
	id:number
};
	/** select columns of table "meetup" */
["meetup_select_column"]:meetup_select_column;
	/** input type for updating data in table "meetup" */
["meetup_set_input"]: {
	created_at?:ValueTypes["timestamptz"] | null,
	datetime?:ValueTypes["timestamptz"] | null,
	description?:string | null,
	id?:number | null,
	image_url?:string | null,
	location?:string | null,
	name?:string | null,
	updated_at?:ValueTypes["timestamptz"] | null
};
	/** aggregate stddev on columns */
["meetup_stddev_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate stddev_pop on columns */
["meetup_stddev_pop_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate stddev_samp on columns */
["meetup_stddev_samp_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate sum on columns */
["meetup_sum_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** update columns of table "meetup" */
["meetup_update_column"]:meetup_update_column;
	/** columns and relationships of "meetup_user" */
["meetup_user"]: AliasType<{
	/** An object relationship */
	meetup?:ValueTypes["meetup"],
	meetup_id?:true,
	/** An object relationship */
	user?:ValueTypes["user"],
	user_id?:true,
		__typename?: true
}>;
	/** aggregated selection of "meetup_user" */
["meetup_user_aggregate"]: AliasType<{
	aggregate?:ValueTypes["meetup_user_aggregate_fields"],
	nodes?:ValueTypes["meetup_user"],
		__typename?: true
}>;
	/** aggregate fields of "meetup_user" */
["meetup_user_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["meetup_user_avg_fields"],
count?: [{	columns?:ValueTypes["meetup_user_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["meetup_user_max_fields"],
	min?:ValueTypes["meetup_user_min_fields"],
	stddev?:ValueTypes["meetup_user_stddev_fields"],
	stddev_pop?:ValueTypes["meetup_user_stddev_pop_fields"],
	stddev_samp?:ValueTypes["meetup_user_stddev_samp_fields"],
	sum?:ValueTypes["meetup_user_sum_fields"],
	var_pop?:ValueTypes["meetup_user_var_pop_fields"],
	var_samp?:ValueTypes["meetup_user_var_samp_fields"],
	variance?:ValueTypes["meetup_user_variance_fields"],
		__typename?: true
}>;
	/** order by aggregate values of table "meetup_user" */
["meetup_user_aggregate_order_by"]: {
	avg?:ValueTypes["meetup_user_avg_order_by"] | null,
	count?:ValueTypes["order_by"] | null,
	max?:ValueTypes["meetup_user_max_order_by"] | null,
	min?:ValueTypes["meetup_user_min_order_by"] | null,
	stddev?:ValueTypes["meetup_user_stddev_order_by"] | null,
	stddev_pop?:ValueTypes["meetup_user_stddev_pop_order_by"] | null,
	stddev_samp?:ValueTypes["meetup_user_stddev_samp_order_by"] | null,
	sum?:ValueTypes["meetup_user_sum_order_by"] | null,
	var_pop?:ValueTypes["meetup_user_var_pop_order_by"] | null,
	var_samp?:ValueTypes["meetup_user_var_samp_order_by"] | null,
	variance?:ValueTypes["meetup_user_variance_order_by"] | null
};
	/** input type for inserting array relation for remote table "meetup_user" */
["meetup_user_arr_rel_insert_input"]: {
	data:ValueTypes["meetup_user_insert_input"][],
	/** on conflict condition */
	on_conflict?:ValueTypes["meetup_user_on_conflict"] | null
};
	/** aggregate avg on columns */
["meetup_user_avg_fields"]: AliasType<{
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by avg() on columns of table "meetup_user" */
["meetup_user_avg_order_by"]: {
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** Boolean expression to filter rows from the table "meetup_user". All fields are combined with a logical 'AND'. */
["meetup_user_bool_exp"]: {
	_and?:ValueTypes["meetup_user_bool_exp"][],
	_not?:ValueTypes["meetup_user_bool_exp"] | null,
	_or?:ValueTypes["meetup_user_bool_exp"][],
	meetup?:ValueTypes["meetup_bool_exp"] | null,
	meetup_id?:ValueTypes["Int_comparison_exp"] | null,
	user?:ValueTypes["user_bool_exp"] | null,
	user_id?:ValueTypes["Int_comparison_exp"] | null
};
	/** unique or primary key constraints on table "meetup_user" */
["meetup_user_constraint"]:meetup_user_constraint;
	/** input type for incrementing numeric columns in table "meetup_user" */
["meetup_user_inc_input"]: {
	meetup_id?:number | null,
	user_id?:number | null
};
	/** input type for inserting data into table "meetup_user" */
["meetup_user_insert_input"]: {
	meetup?:ValueTypes["meetup_obj_rel_insert_input"] | null,
	meetup_id?:number | null,
	user?:ValueTypes["user_obj_rel_insert_input"] | null,
	user_id?:number | null
};
	/** aggregate max on columns */
["meetup_user_max_fields"]: AliasType<{
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by max() on columns of table "meetup_user" */
["meetup_user_max_order_by"]: {
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** aggregate min on columns */
["meetup_user_min_fields"]: AliasType<{
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by min() on columns of table "meetup_user" */
["meetup_user_min_order_by"]: {
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** response of any mutation on the table "meetup_user" */
["meetup_user_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["meetup_user"],
		__typename?: true
}>;
	/** on conflict condition type for table "meetup_user" */
["meetup_user_on_conflict"]: {
	constraint:ValueTypes["meetup_user_constraint"],
	update_columns:ValueTypes["meetup_user_update_column"][],
	where?:ValueTypes["meetup_user_bool_exp"] | null
};
	/** Ordering options when selecting data from "meetup_user". */
["meetup_user_order_by"]: {
	meetup?:ValueTypes["meetup_order_by"] | null,
	meetup_id?:ValueTypes["order_by"] | null,
	user?:ValueTypes["user_order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: meetup_user */
["meetup_user_pk_columns_input"]: {
	meetup_id:number,
	user_id:number
};
	/** select columns of table "meetup_user" */
["meetup_user_select_column"]:meetup_user_select_column;
	/** input type for updating data in table "meetup_user" */
["meetup_user_set_input"]: {
	meetup_id?:number | null,
	user_id?:number | null
};
	/** aggregate stddev on columns */
["meetup_user_stddev_fields"]: AliasType<{
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by stddev() on columns of table "meetup_user" */
["meetup_user_stddev_order_by"]: {
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** aggregate stddev_pop on columns */
["meetup_user_stddev_pop_fields"]: AliasType<{
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by stddev_pop() on columns of table "meetup_user" */
["meetup_user_stddev_pop_order_by"]: {
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** aggregate stddev_samp on columns */
["meetup_user_stddev_samp_fields"]: AliasType<{
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by stddev_samp() on columns of table "meetup_user" */
["meetup_user_stddev_samp_order_by"]: {
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** aggregate sum on columns */
["meetup_user_sum_fields"]: AliasType<{
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by sum() on columns of table "meetup_user" */
["meetup_user_sum_order_by"]: {
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** update columns of table "meetup_user" */
["meetup_user_update_column"]:meetup_user_update_column;
	/** aggregate var_pop on columns */
["meetup_user_var_pop_fields"]: AliasType<{
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by var_pop() on columns of table "meetup_user" */
["meetup_user_var_pop_order_by"]: {
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** aggregate var_samp on columns */
["meetup_user_var_samp_fields"]: AliasType<{
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by var_samp() on columns of table "meetup_user" */
["meetup_user_var_samp_order_by"]: {
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** aggregate variance on columns */
["meetup_user_variance_fields"]: AliasType<{
	meetup_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by variance() on columns of table "meetup_user" */
["meetup_user_variance_order_by"]: {
	meetup_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** aggregate var_pop on columns */
["meetup_var_pop_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate var_samp on columns */
["meetup_var_samp_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate variance on columns */
["meetup_variance_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** mutation root */
["mutation_root"]: AliasType<{
delete_meetup?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["meetup_bool_exp"]},ValueTypes["meetup_mutation_response"]],
delete_meetup_by_pk?: [{	id:number},ValueTypes["meetup"]],
delete_meetup_comment?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["meetup_comment_bool_exp"]},ValueTypes["meetup_comment_mutation_response"]],
delete_meetup_comment_by_pk?: [{	id:number},ValueTypes["meetup_comment"]],
delete_meetup_user?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["meetup_user_bool_exp"]},ValueTypes["meetup_user_mutation_response"]],
delete_meetup_user_by_pk?: [{	meetup_id:number,	user_id:number},ValueTypes["meetup_user"]],
delete_user?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["user_bool_exp"]},ValueTypes["user_mutation_response"]],
delete_user_by_pk?: [{	id:number},ValueTypes["user"]],
insert_meetup?: [{	/** the rows to be inserted */
	objects:ValueTypes["meetup_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["meetup_on_conflict"] | null},ValueTypes["meetup_mutation_response"]],
insert_meetup_comment?: [{	/** the rows to be inserted */
	objects:ValueTypes["meetup_comment_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["meetup_comment_on_conflict"] | null},ValueTypes["meetup_comment_mutation_response"]],
insert_meetup_comment_one?: [{	/** the row to be inserted */
	object:ValueTypes["meetup_comment_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["meetup_comment_on_conflict"] | null},ValueTypes["meetup_comment"]],
insert_meetup_one?: [{	/** the row to be inserted */
	object:ValueTypes["meetup_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["meetup_on_conflict"] | null},ValueTypes["meetup"]],
insert_meetup_user?: [{	/** the rows to be inserted */
	objects:ValueTypes["meetup_user_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["meetup_user_on_conflict"] | null},ValueTypes["meetup_user_mutation_response"]],
insert_meetup_user_one?: [{	/** the row to be inserted */
	object:ValueTypes["meetup_user_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["meetup_user_on_conflict"] | null},ValueTypes["meetup_user"]],
insert_user?: [{	/** the rows to be inserted */
	objects:ValueTypes["user_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["user_on_conflict"] | null},ValueTypes["user_mutation_response"]],
insert_user_one?: [{	/** the row to be inserted */
	object:ValueTypes["user_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["user_on_conflict"] | null},ValueTypes["user"]],
update_meetup?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["meetup_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["meetup_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["meetup_bool_exp"]},ValueTypes["meetup_mutation_response"]],
update_meetup_by_pk?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["meetup_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["meetup_set_input"] | null,	pk_columns:ValueTypes["meetup_pk_columns_input"]},ValueTypes["meetup"]],
update_meetup_comment?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["meetup_comment_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["meetup_comment_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["meetup_comment_bool_exp"]},ValueTypes["meetup_comment_mutation_response"]],
update_meetup_comment_by_pk?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["meetup_comment_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["meetup_comment_set_input"] | null,	pk_columns:ValueTypes["meetup_comment_pk_columns_input"]},ValueTypes["meetup_comment"]],
update_meetup_user?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["meetup_user_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["meetup_user_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["meetup_user_bool_exp"]},ValueTypes["meetup_user_mutation_response"]],
update_meetup_user_by_pk?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["meetup_user_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["meetup_user_set_input"] | null,	pk_columns:ValueTypes["meetup_user_pk_columns_input"]},ValueTypes["meetup_user"]],
update_user?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["user_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["user_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["user_bool_exp"]},ValueTypes["user_mutation_response"]],
update_user_by_pk?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["user_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["user_set_input"] | null,	pk_columns:ValueTypes["user_pk_columns_input"]},ValueTypes["user"]],
		__typename?: true
}>;
	/** column ordering options */
["order_by"]:order_by;
	["query_root"]: AliasType<{
meetup?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_bool_exp"] | null},ValueTypes["meetup"]],
meetup_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_bool_exp"] | null},ValueTypes["meetup_aggregate"]],
meetup_by_pk?: [{	id:number},ValueTypes["meetup"]],
meetup_comment?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_comment_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_comment_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_comment_bool_exp"] | null},ValueTypes["meetup_comment"]],
meetup_comment_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_comment_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_comment_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_comment_bool_exp"] | null},ValueTypes["meetup_comment_aggregate"]],
meetup_comment_by_pk?: [{	id:number},ValueTypes["meetup_comment"]],
meetup_user?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_user_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_user_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_user_bool_exp"] | null},ValueTypes["meetup_user"]],
meetup_user_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_user_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_user_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_user_bool_exp"] | null},ValueTypes["meetup_user_aggregate"]],
meetup_user_by_pk?: [{	meetup_id:number,	user_id:number},ValueTypes["meetup_user"]],
user?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_bool_exp"] | null},ValueTypes["user"]],
user_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_bool_exp"] | null},ValueTypes["user_aggregate"]],
user_by_pk?: [{	id:number},ValueTypes["user"]],
		__typename?: true
}>;
	["subscription_root"]: AliasType<{
meetup?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_bool_exp"] | null},ValueTypes["meetup"]],
meetup_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_bool_exp"] | null},ValueTypes["meetup_aggregate"]],
meetup_by_pk?: [{	id:number},ValueTypes["meetup"]],
meetup_comment?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_comment_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_comment_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_comment_bool_exp"] | null},ValueTypes["meetup_comment"]],
meetup_comment_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_comment_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_comment_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_comment_bool_exp"] | null},ValueTypes["meetup_comment_aggregate"]],
meetup_comment_by_pk?: [{	id:number},ValueTypes["meetup_comment"]],
meetup_user?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_user_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_user_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_user_bool_exp"] | null},ValueTypes["meetup_user"]],
meetup_user_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_user_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_user_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_user_bool_exp"] | null},ValueTypes["meetup_user_aggregate"]],
meetup_user_by_pk?: [{	meetup_id:number,	user_id:number},ValueTypes["meetup_user"]],
user?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_bool_exp"] | null},ValueTypes["user"]],
user_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_bool_exp"] | null},ValueTypes["user_aggregate"]],
user_by_pk?: [{	id:number},ValueTypes["user"]],
		__typename?: true
}>;
	["timestamptz"]:unknown;
	/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
["timestamptz_comparison_exp"]: {
	_eq?:ValueTypes["timestamptz"] | null,
	_gt?:ValueTypes["timestamptz"] | null,
	_gte?:ValueTypes["timestamptz"] | null,
	_in?:ValueTypes["timestamptz"][],
	_is_null?:boolean | null,
	_lt?:ValueTypes["timestamptz"] | null,
	_lte?:ValueTypes["timestamptz"] | null,
	_neq?:ValueTypes["timestamptz"] | null,
	_nin?:ValueTypes["timestamptz"][]
};
	/** columns and relationships of "user" */
["user"]: AliasType<{
	created_at?:true,
	email?:true,
	id?:true,
meetup_comments?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_comment_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_comment_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_comment_bool_exp"] | null},ValueTypes["meetup_comment"]],
meetup_comments_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_comment_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_comment_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_comment_bool_exp"] | null},ValueTypes["meetup_comment_aggregate"]],
meetup_users?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_user_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_user_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_user_bool_exp"] | null},ValueTypes["meetup_user"]],
meetup_users_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["meetup_user_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["meetup_user_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["meetup_user_bool_exp"] | null},ValueTypes["meetup_user_aggregate"]],
	password?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** aggregated selection of "user" */
["user_aggregate"]: AliasType<{
	aggregate?:ValueTypes["user_aggregate_fields"],
	nodes?:ValueTypes["user"],
		__typename?: true
}>;
	/** aggregate fields of "user" */
["user_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["user_avg_fields"],
count?: [{	columns?:ValueTypes["user_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["user_max_fields"],
	min?:ValueTypes["user_min_fields"],
	stddev?:ValueTypes["user_stddev_fields"],
	stddev_pop?:ValueTypes["user_stddev_pop_fields"],
	stddev_samp?:ValueTypes["user_stddev_samp_fields"],
	sum?:ValueTypes["user_sum_fields"],
	var_pop?:ValueTypes["user_var_pop_fields"],
	var_samp?:ValueTypes["user_var_samp_fields"],
	variance?:ValueTypes["user_variance_fields"],
		__typename?: true
}>;
	/** aggregate avg on columns */
["user_avg_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
["user_bool_exp"]: {
	_and?:ValueTypes["user_bool_exp"][],
	_not?:ValueTypes["user_bool_exp"] | null,
	_or?:ValueTypes["user_bool_exp"][],
	created_at?:ValueTypes["timestamptz_comparison_exp"] | null,
	email?:ValueTypes["String_comparison_exp"] | null,
	id?:ValueTypes["Int_comparison_exp"] | null,
	meetup_comments?:ValueTypes["meetup_comment_bool_exp"] | null,
	meetup_users?:ValueTypes["meetup_user_bool_exp"] | null,
	password?:ValueTypes["String_comparison_exp"] | null,
	updated_at?:ValueTypes["timestamptz_comparison_exp"] | null
};
	/** unique or primary key constraints on table "user" */
["user_constraint"]:user_constraint;
	/** input type for incrementing numeric columns in table "user" */
["user_inc_input"]: {
	id?:number | null
};
	/** input type for inserting data into table "user" */
["user_insert_input"]: {
	created_at?:ValueTypes["timestamptz"] | null,
	email?:string | null,
	id?:number | null,
	meetup_comments?:ValueTypes["meetup_comment_arr_rel_insert_input"] | null,
	meetup_users?:ValueTypes["meetup_user_arr_rel_insert_input"] | null,
	password?:string | null,
	updated_at?:ValueTypes["timestamptz"] | null
};
	/** aggregate max on columns */
["user_max_fields"]: AliasType<{
	created_at?:true,
	email?:true,
	id?:true,
	password?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["user_min_fields"]: AliasType<{
	created_at?:true,
	email?:true,
	id?:true,
	password?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "user" */
["user_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["user"],
		__typename?: true
}>;
	/** input type for inserting object relation for remote table "user" */
["user_obj_rel_insert_input"]: {
	data:ValueTypes["user_insert_input"],
	/** on conflict condition */
	on_conflict?:ValueTypes["user_on_conflict"] | null
};
	/** on conflict condition type for table "user" */
["user_on_conflict"]: {
	constraint:ValueTypes["user_constraint"],
	update_columns:ValueTypes["user_update_column"][],
	where?:ValueTypes["user_bool_exp"] | null
};
	/** Ordering options when selecting data from "user". */
["user_order_by"]: {
	created_at?:ValueTypes["order_by"] | null,
	email?:ValueTypes["order_by"] | null,
	id?:ValueTypes["order_by"] | null,
	meetup_comments_aggregate?:ValueTypes["meetup_comment_aggregate_order_by"] | null,
	meetup_users_aggregate?:ValueTypes["meetup_user_aggregate_order_by"] | null,
	password?:ValueTypes["order_by"] | null,
	updated_at?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: user */
["user_pk_columns_input"]: {
	id:number
};
	/** select columns of table "user" */
["user_select_column"]:user_select_column;
	/** input type for updating data in table "user" */
["user_set_input"]: {
	created_at?:ValueTypes["timestamptz"] | null,
	email?:string | null,
	id?:number | null,
	password?:string | null,
	updated_at?:ValueTypes["timestamptz"] | null
};
	/** aggregate stddev on columns */
["user_stddev_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate stddev_pop on columns */
["user_stddev_pop_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate stddev_samp on columns */
["user_stddev_samp_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate sum on columns */
["user_sum_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** update columns of table "user" */
["user_update_column"]:user_update_column;
	/** aggregate var_pop on columns */
["user_var_pop_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate var_samp on columns */
["user_var_samp_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate variance on columns */
["user_variance_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>
  }

export type ModelTypes = {
    /** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
["Int_comparison_exp"]: GraphQLTypes["Int_comparison_exp"];
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: GraphQLTypes["String_comparison_exp"];
	/** columns and relationships of "meetup" */
["meetup"]: {
		created_at:ModelTypes["timestamptz"],
	datetime:ModelTypes["timestamptz"],
	description:string,
	id:number,
	image_url:string,
	location:string,
	/** An array relationship */
	meetup_comments:ModelTypes["meetup_comment"][],
	/** An aggregate relationship */
	meetup_comments_aggregate:ModelTypes["meetup_comment_aggregate"],
	/** An array relationship */
	meetup_users:ModelTypes["meetup_user"][],
	/** An aggregate relationship */
	meetup_users_aggregate:ModelTypes["meetup_user_aggregate"],
	name:string,
	updated_at:ModelTypes["timestamptz"]
};
	/** aggregated selection of "meetup" */
["meetup_aggregate"]: {
		aggregate?:ModelTypes["meetup_aggregate_fields"],
	nodes:ModelTypes["meetup"][]
};
	/** aggregate fields of "meetup" */
["meetup_aggregate_fields"]: {
		avg?:ModelTypes["meetup_avg_fields"],
	count:number,
	max?:ModelTypes["meetup_max_fields"],
	min?:ModelTypes["meetup_min_fields"],
	stddev?:ModelTypes["meetup_stddev_fields"],
	stddev_pop?:ModelTypes["meetup_stddev_pop_fields"],
	stddev_samp?:ModelTypes["meetup_stddev_samp_fields"],
	sum?:ModelTypes["meetup_sum_fields"],
	var_pop?:ModelTypes["meetup_var_pop_fields"],
	var_samp?:ModelTypes["meetup_var_samp_fields"],
	variance?:ModelTypes["meetup_variance_fields"]
};
	/** aggregate avg on columns */
["meetup_avg_fields"]: {
		id?:number
};
	/** Boolean expression to filter rows from the table "meetup". All fields are combined with a logical 'AND'. */
["meetup_bool_exp"]: GraphQLTypes["meetup_bool_exp"];
	/** columns and relationships of "meetup_comment" */
["meetup_comment"]: {
		id:number,
	/** An object relationship */
	meetup:ModelTypes["meetup"],
	meetup_id:number,
	text:string,
	/** An object relationship */
	user:ModelTypes["user"],
	user_id:number
};
	/** aggregated selection of "meetup_comment" */
["meetup_comment_aggregate"]: {
		aggregate?:ModelTypes["meetup_comment_aggregate_fields"],
	nodes:ModelTypes["meetup_comment"][]
};
	/** aggregate fields of "meetup_comment" */
["meetup_comment_aggregate_fields"]: {
		avg?:ModelTypes["meetup_comment_avg_fields"],
	count:number,
	max?:ModelTypes["meetup_comment_max_fields"],
	min?:ModelTypes["meetup_comment_min_fields"],
	stddev?:ModelTypes["meetup_comment_stddev_fields"],
	stddev_pop?:ModelTypes["meetup_comment_stddev_pop_fields"],
	stddev_samp?:ModelTypes["meetup_comment_stddev_samp_fields"],
	sum?:ModelTypes["meetup_comment_sum_fields"],
	var_pop?:ModelTypes["meetup_comment_var_pop_fields"],
	var_samp?:ModelTypes["meetup_comment_var_samp_fields"],
	variance?:ModelTypes["meetup_comment_variance_fields"]
};
	/** order by aggregate values of table "meetup_comment" */
["meetup_comment_aggregate_order_by"]: GraphQLTypes["meetup_comment_aggregate_order_by"];
	/** input type for inserting array relation for remote table "meetup_comment" */
["meetup_comment_arr_rel_insert_input"]: GraphQLTypes["meetup_comment_arr_rel_insert_input"];
	/** aggregate avg on columns */
["meetup_comment_avg_fields"]: {
		id?:number,
	meetup_id?:number,
	user_id?:number
};
	/** order by avg() on columns of table "meetup_comment" */
["meetup_comment_avg_order_by"]: GraphQLTypes["meetup_comment_avg_order_by"];
	/** Boolean expression to filter rows from the table "meetup_comment". All fields are combined with a logical 'AND'. */
["meetup_comment_bool_exp"]: GraphQLTypes["meetup_comment_bool_exp"];
	/** unique or primary key constraints on table "meetup_comment" */
["meetup_comment_constraint"]: GraphQLTypes["meetup_comment_constraint"];
	/** input type for incrementing numeric columns in table "meetup_comment" */
["meetup_comment_inc_input"]: GraphQLTypes["meetup_comment_inc_input"];
	/** input type for inserting data into table "meetup_comment" */
["meetup_comment_insert_input"]: GraphQLTypes["meetup_comment_insert_input"];
	/** aggregate max on columns */
["meetup_comment_max_fields"]: {
		id?:number,
	meetup_id?:number,
	text?:string,
	user_id?:number
};
	/** order by max() on columns of table "meetup_comment" */
["meetup_comment_max_order_by"]: GraphQLTypes["meetup_comment_max_order_by"];
	/** aggregate min on columns */
["meetup_comment_min_fields"]: {
		id?:number,
	meetup_id?:number,
	text?:string,
	user_id?:number
};
	/** order by min() on columns of table "meetup_comment" */
["meetup_comment_min_order_by"]: GraphQLTypes["meetup_comment_min_order_by"];
	/** response of any mutation on the table "meetup_comment" */
["meetup_comment_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["meetup_comment"][]
};
	/** on conflict condition type for table "meetup_comment" */
["meetup_comment_on_conflict"]: GraphQLTypes["meetup_comment_on_conflict"];
	/** Ordering options when selecting data from "meetup_comment". */
["meetup_comment_order_by"]: GraphQLTypes["meetup_comment_order_by"];
	/** primary key columns input for table: meetup_comment */
["meetup_comment_pk_columns_input"]: GraphQLTypes["meetup_comment_pk_columns_input"];
	/** select columns of table "meetup_comment" */
["meetup_comment_select_column"]: GraphQLTypes["meetup_comment_select_column"];
	/** input type for updating data in table "meetup_comment" */
["meetup_comment_set_input"]: GraphQLTypes["meetup_comment_set_input"];
	/** aggregate stddev on columns */
["meetup_comment_stddev_fields"]: {
		id?:number,
	meetup_id?:number,
	user_id?:number
};
	/** order by stddev() on columns of table "meetup_comment" */
["meetup_comment_stddev_order_by"]: GraphQLTypes["meetup_comment_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["meetup_comment_stddev_pop_fields"]: {
		id?:number,
	meetup_id?:number,
	user_id?:number
};
	/** order by stddev_pop() on columns of table "meetup_comment" */
["meetup_comment_stddev_pop_order_by"]: GraphQLTypes["meetup_comment_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["meetup_comment_stddev_samp_fields"]: {
		id?:number,
	meetup_id?:number,
	user_id?:number
};
	/** order by stddev_samp() on columns of table "meetup_comment" */
["meetup_comment_stddev_samp_order_by"]: GraphQLTypes["meetup_comment_stddev_samp_order_by"];
	/** aggregate sum on columns */
["meetup_comment_sum_fields"]: {
		id?:number,
	meetup_id?:number,
	user_id?:number
};
	/** order by sum() on columns of table "meetup_comment" */
["meetup_comment_sum_order_by"]: GraphQLTypes["meetup_comment_sum_order_by"];
	/** update columns of table "meetup_comment" */
["meetup_comment_update_column"]: GraphQLTypes["meetup_comment_update_column"];
	/** aggregate var_pop on columns */
["meetup_comment_var_pop_fields"]: {
		id?:number,
	meetup_id?:number,
	user_id?:number
};
	/** order by var_pop() on columns of table "meetup_comment" */
["meetup_comment_var_pop_order_by"]: GraphQLTypes["meetup_comment_var_pop_order_by"];
	/** aggregate var_samp on columns */
["meetup_comment_var_samp_fields"]: {
		id?:number,
	meetup_id?:number,
	user_id?:number
};
	/** order by var_samp() on columns of table "meetup_comment" */
["meetup_comment_var_samp_order_by"]: GraphQLTypes["meetup_comment_var_samp_order_by"];
	/** aggregate variance on columns */
["meetup_comment_variance_fields"]: {
		id?:number,
	meetup_id?:number,
	user_id?:number
};
	/** order by variance() on columns of table "meetup_comment" */
["meetup_comment_variance_order_by"]: GraphQLTypes["meetup_comment_variance_order_by"];
	/** unique or primary key constraints on table "meetup" */
["meetup_constraint"]: GraphQLTypes["meetup_constraint"];
	/** input type for incrementing numeric columns in table "meetup" */
["meetup_inc_input"]: GraphQLTypes["meetup_inc_input"];
	/** input type for inserting data into table "meetup" */
["meetup_insert_input"]: GraphQLTypes["meetup_insert_input"];
	/** aggregate max on columns */
["meetup_max_fields"]: {
		created_at?:ModelTypes["timestamptz"],
	datetime?:ModelTypes["timestamptz"],
	description?:string,
	id?:number,
	image_url?:string,
	location?:string,
	name?:string,
	updated_at?:ModelTypes["timestamptz"]
};
	/** aggregate min on columns */
["meetup_min_fields"]: {
		created_at?:ModelTypes["timestamptz"],
	datetime?:ModelTypes["timestamptz"],
	description?:string,
	id?:number,
	image_url?:string,
	location?:string,
	name?:string,
	updated_at?:ModelTypes["timestamptz"]
};
	/** response of any mutation on the table "meetup" */
["meetup_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["meetup"][]
};
	/** input type for inserting object relation for remote table "meetup" */
["meetup_obj_rel_insert_input"]: GraphQLTypes["meetup_obj_rel_insert_input"];
	/** on conflict condition type for table "meetup" */
["meetup_on_conflict"]: GraphQLTypes["meetup_on_conflict"];
	/** Ordering options when selecting data from "meetup". */
["meetup_order_by"]: GraphQLTypes["meetup_order_by"];
	/** primary key columns input for table: meetup */
["meetup_pk_columns_input"]: GraphQLTypes["meetup_pk_columns_input"];
	/** select columns of table "meetup" */
["meetup_select_column"]: GraphQLTypes["meetup_select_column"];
	/** input type for updating data in table "meetup" */
["meetup_set_input"]: GraphQLTypes["meetup_set_input"];
	/** aggregate stddev on columns */
["meetup_stddev_fields"]: {
		id?:number
};
	/** aggregate stddev_pop on columns */
["meetup_stddev_pop_fields"]: {
		id?:number
};
	/** aggregate stddev_samp on columns */
["meetup_stddev_samp_fields"]: {
		id?:number
};
	/** aggregate sum on columns */
["meetup_sum_fields"]: {
		id?:number
};
	/** update columns of table "meetup" */
["meetup_update_column"]: GraphQLTypes["meetup_update_column"];
	/** columns and relationships of "meetup_user" */
["meetup_user"]: {
		/** An object relationship */
	meetup:ModelTypes["meetup"],
	meetup_id:number,
	/** An object relationship */
	user:ModelTypes["user"],
	user_id:number
};
	/** aggregated selection of "meetup_user" */
["meetup_user_aggregate"]: {
		aggregate?:ModelTypes["meetup_user_aggregate_fields"],
	nodes:ModelTypes["meetup_user"][]
};
	/** aggregate fields of "meetup_user" */
["meetup_user_aggregate_fields"]: {
		avg?:ModelTypes["meetup_user_avg_fields"],
	count:number,
	max?:ModelTypes["meetup_user_max_fields"],
	min?:ModelTypes["meetup_user_min_fields"],
	stddev?:ModelTypes["meetup_user_stddev_fields"],
	stddev_pop?:ModelTypes["meetup_user_stddev_pop_fields"],
	stddev_samp?:ModelTypes["meetup_user_stddev_samp_fields"],
	sum?:ModelTypes["meetup_user_sum_fields"],
	var_pop?:ModelTypes["meetup_user_var_pop_fields"],
	var_samp?:ModelTypes["meetup_user_var_samp_fields"],
	variance?:ModelTypes["meetup_user_variance_fields"]
};
	/** order by aggregate values of table "meetup_user" */
["meetup_user_aggregate_order_by"]: GraphQLTypes["meetup_user_aggregate_order_by"];
	/** input type for inserting array relation for remote table "meetup_user" */
["meetup_user_arr_rel_insert_input"]: GraphQLTypes["meetup_user_arr_rel_insert_input"];
	/** aggregate avg on columns */
["meetup_user_avg_fields"]: {
		meetup_id?:number,
	user_id?:number
};
	/** order by avg() on columns of table "meetup_user" */
["meetup_user_avg_order_by"]: GraphQLTypes["meetup_user_avg_order_by"];
	/** Boolean expression to filter rows from the table "meetup_user". All fields are combined with a logical 'AND'. */
["meetup_user_bool_exp"]: GraphQLTypes["meetup_user_bool_exp"];
	/** unique or primary key constraints on table "meetup_user" */
["meetup_user_constraint"]: GraphQLTypes["meetup_user_constraint"];
	/** input type for incrementing numeric columns in table "meetup_user" */
["meetup_user_inc_input"]: GraphQLTypes["meetup_user_inc_input"];
	/** input type for inserting data into table "meetup_user" */
["meetup_user_insert_input"]: GraphQLTypes["meetup_user_insert_input"];
	/** aggregate max on columns */
["meetup_user_max_fields"]: {
		meetup_id?:number,
	user_id?:number
};
	/** order by max() on columns of table "meetup_user" */
["meetup_user_max_order_by"]: GraphQLTypes["meetup_user_max_order_by"];
	/** aggregate min on columns */
["meetup_user_min_fields"]: {
		meetup_id?:number,
	user_id?:number
};
	/** order by min() on columns of table "meetup_user" */
["meetup_user_min_order_by"]: GraphQLTypes["meetup_user_min_order_by"];
	/** response of any mutation on the table "meetup_user" */
["meetup_user_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["meetup_user"][]
};
	/** on conflict condition type for table "meetup_user" */
["meetup_user_on_conflict"]: GraphQLTypes["meetup_user_on_conflict"];
	/** Ordering options when selecting data from "meetup_user". */
["meetup_user_order_by"]: GraphQLTypes["meetup_user_order_by"];
	/** primary key columns input for table: meetup_user */
["meetup_user_pk_columns_input"]: GraphQLTypes["meetup_user_pk_columns_input"];
	/** select columns of table "meetup_user" */
["meetup_user_select_column"]: GraphQLTypes["meetup_user_select_column"];
	/** input type for updating data in table "meetup_user" */
["meetup_user_set_input"]: GraphQLTypes["meetup_user_set_input"];
	/** aggregate stddev on columns */
["meetup_user_stddev_fields"]: {
		meetup_id?:number,
	user_id?:number
};
	/** order by stddev() on columns of table "meetup_user" */
["meetup_user_stddev_order_by"]: GraphQLTypes["meetup_user_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["meetup_user_stddev_pop_fields"]: {
		meetup_id?:number,
	user_id?:number
};
	/** order by stddev_pop() on columns of table "meetup_user" */
["meetup_user_stddev_pop_order_by"]: GraphQLTypes["meetup_user_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["meetup_user_stddev_samp_fields"]: {
		meetup_id?:number,
	user_id?:number
};
	/** order by stddev_samp() on columns of table "meetup_user" */
["meetup_user_stddev_samp_order_by"]: GraphQLTypes["meetup_user_stddev_samp_order_by"];
	/** aggregate sum on columns */
["meetup_user_sum_fields"]: {
		meetup_id?:number,
	user_id?:number
};
	/** order by sum() on columns of table "meetup_user" */
["meetup_user_sum_order_by"]: GraphQLTypes["meetup_user_sum_order_by"];
	/** update columns of table "meetup_user" */
["meetup_user_update_column"]: GraphQLTypes["meetup_user_update_column"];
	/** aggregate var_pop on columns */
["meetup_user_var_pop_fields"]: {
		meetup_id?:number,
	user_id?:number
};
	/** order by var_pop() on columns of table "meetup_user" */
["meetup_user_var_pop_order_by"]: GraphQLTypes["meetup_user_var_pop_order_by"];
	/** aggregate var_samp on columns */
["meetup_user_var_samp_fields"]: {
		meetup_id?:number,
	user_id?:number
};
	/** order by var_samp() on columns of table "meetup_user" */
["meetup_user_var_samp_order_by"]: GraphQLTypes["meetup_user_var_samp_order_by"];
	/** aggregate variance on columns */
["meetup_user_variance_fields"]: {
		meetup_id?:number,
	user_id?:number
};
	/** order by variance() on columns of table "meetup_user" */
["meetup_user_variance_order_by"]: GraphQLTypes["meetup_user_variance_order_by"];
	/** aggregate var_pop on columns */
["meetup_var_pop_fields"]: {
		id?:number
};
	/** aggregate var_samp on columns */
["meetup_var_samp_fields"]: {
		id?:number
};
	/** aggregate variance on columns */
["meetup_variance_fields"]: {
		id?:number
};
	/** mutation root */
["mutation_root"]: {
		/** delete data from the table: "meetup" */
	delete_meetup?:ModelTypes["meetup_mutation_response"],
	/** delete single row from the table: "meetup" */
	delete_meetup_by_pk?:ModelTypes["meetup"],
	/** delete data from the table: "meetup_comment" */
	delete_meetup_comment?:ModelTypes["meetup_comment_mutation_response"],
	/** delete single row from the table: "meetup_comment" */
	delete_meetup_comment_by_pk?:ModelTypes["meetup_comment"],
	/** delete data from the table: "meetup_user" */
	delete_meetup_user?:ModelTypes["meetup_user_mutation_response"],
	/** delete single row from the table: "meetup_user" */
	delete_meetup_user_by_pk?:ModelTypes["meetup_user"],
	/** delete data from the table: "user" */
	delete_user?:ModelTypes["user_mutation_response"],
	/** delete single row from the table: "user" */
	delete_user_by_pk?:ModelTypes["user"],
	/** insert data into the table: "meetup" */
	insert_meetup?:ModelTypes["meetup_mutation_response"],
	/** insert data into the table: "meetup_comment" */
	insert_meetup_comment?:ModelTypes["meetup_comment_mutation_response"],
	/** insert a single row into the table: "meetup_comment" */
	insert_meetup_comment_one?:ModelTypes["meetup_comment"],
	/** insert a single row into the table: "meetup" */
	insert_meetup_one?:ModelTypes["meetup"],
	/** insert data into the table: "meetup_user" */
	insert_meetup_user?:ModelTypes["meetup_user_mutation_response"],
	/** insert a single row into the table: "meetup_user" */
	insert_meetup_user_one?:ModelTypes["meetup_user"],
	/** insert data into the table: "user" */
	insert_user?:ModelTypes["user_mutation_response"],
	/** insert a single row into the table: "user" */
	insert_user_one?:ModelTypes["user"],
	/** update data of the table: "meetup" */
	update_meetup?:ModelTypes["meetup_mutation_response"],
	/** update single row of the table: "meetup" */
	update_meetup_by_pk?:ModelTypes["meetup"],
	/** update data of the table: "meetup_comment" */
	update_meetup_comment?:ModelTypes["meetup_comment_mutation_response"],
	/** update single row of the table: "meetup_comment" */
	update_meetup_comment_by_pk?:ModelTypes["meetup_comment"],
	/** update data of the table: "meetup_user" */
	update_meetup_user?:ModelTypes["meetup_user_mutation_response"],
	/** update single row of the table: "meetup_user" */
	update_meetup_user_by_pk?:ModelTypes["meetup_user"],
	/** update data of the table: "user" */
	update_user?:ModelTypes["user_mutation_response"],
	/** update single row of the table: "user" */
	update_user_by_pk?:ModelTypes["user"]
};
	/** column ordering options */
["order_by"]: GraphQLTypes["order_by"];
	["query_root"]: {
		/** fetch data from the table: "meetup" */
	meetup:ModelTypes["meetup"][],
	/** fetch aggregated fields from the table: "meetup" */
	meetup_aggregate:ModelTypes["meetup_aggregate"],
	/** fetch data from the table: "meetup" using primary key columns */
	meetup_by_pk?:ModelTypes["meetup"],
	/** fetch data from the table: "meetup_comment" */
	meetup_comment:ModelTypes["meetup_comment"][],
	/** fetch aggregated fields from the table: "meetup_comment" */
	meetup_comment_aggregate:ModelTypes["meetup_comment_aggregate"],
	/** fetch data from the table: "meetup_comment" using primary key columns */
	meetup_comment_by_pk?:ModelTypes["meetup_comment"],
	/** fetch data from the table: "meetup_user" */
	meetup_user:ModelTypes["meetup_user"][],
	/** fetch aggregated fields from the table: "meetup_user" */
	meetup_user_aggregate:ModelTypes["meetup_user_aggregate"],
	/** fetch data from the table: "meetup_user" using primary key columns */
	meetup_user_by_pk?:ModelTypes["meetup_user"],
	/** fetch data from the table: "user" */
	user:ModelTypes["user"][],
	/** fetch aggregated fields from the table: "user" */
	user_aggregate:ModelTypes["user_aggregate"],
	/** fetch data from the table: "user" using primary key columns */
	user_by_pk?:ModelTypes["user"]
};
	["subscription_root"]: {
		/** fetch data from the table: "meetup" */
	meetup:ModelTypes["meetup"][],
	/** fetch aggregated fields from the table: "meetup" */
	meetup_aggregate:ModelTypes["meetup_aggregate"],
	/** fetch data from the table: "meetup" using primary key columns */
	meetup_by_pk?:ModelTypes["meetup"],
	/** fetch data from the table: "meetup_comment" */
	meetup_comment:ModelTypes["meetup_comment"][],
	/** fetch aggregated fields from the table: "meetup_comment" */
	meetup_comment_aggregate:ModelTypes["meetup_comment_aggregate"],
	/** fetch data from the table: "meetup_comment" using primary key columns */
	meetup_comment_by_pk?:ModelTypes["meetup_comment"],
	/** fetch data from the table: "meetup_user" */
	meetup_user:ModelTypes["meetup_user"][],
	/** fetch aggregated fields from the table: "meetup_user" */
	meetup_user_aggregate:ModelTypes["meetup_user_aggregate"],
	/** fetch data from the table: "meetup_user" using primary key columns */
	meetup_user_by_pk?:ModelTypes["meetup_user"],
	/** fetch data from the table: "user" */
	user:ModelTypes["user"][],
	/** fetch aggregated fields from the table: "user" */
	user_aggregate:ModelTypes["user_aggregate"],
	/** fetch data from the table: "user" using primary key columns */
	user_by_pk?:ModelTypes["user"]
};
	["timestamptz"]:any;
	/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
["timestamptz_comparison_exp"]: GraphQLTypes["timestamptz_comparison_exp"];
	/** columns and relationships of "user" */
["user"]: {
		created_at:ModelTypes["timestamptz"],
	email:string,
	id:number,
	/** An array relationship */
	meetup_comments:ModelTypes["meetup_comment"][],
	/** An aggregate relationship */
	meetup_comments_aggregate:ModelTypes["meetup_comment_aggregate"],
	/** An array relationship */
	meetup_users:ModelTypes["meetup_user"][],
	/** An aggregate relationship */
	meetup_users_aggregate:ModelTypes["meetup_user_aggregate"],
	password:string,
	updated_at:ModelTypes["timestamptz"]
};
	/** aggregated selection of "user" */
["user_aggregate"]: {
		aggregate?:ModelTypes["user_aggregate_fields"],
	nodes:ModelTypes["user"][]
};
	/** aggregate fields of "user" */
["user_aggregate_fields"]: {
		avg?:ModelTypes["user_avg_fields"],
	count:number,
	max?:ModelTypes["user_max_fields"],
	min?:ModelTypes["user_min_fields"],
	stddev?:ModelTypes["user_stddev_fields"],
	stddev_pop?:ModelTypes["user_stddev_pop_fields"],
	stddev_samp?:ModelTypes["user_stddev_samp_fields"],
	sum?:ModelTypes["user_sum_fields"],
	var_pop?:ModelTypes["user_var_pop_fields"],
	var_samp?:ModelTypes["user_var_samp_fields"],
	variance?:ModelTypes["user_variance_fields"]
};
	/** aggregate avg on columns */
["user_avg_fields"]: {
		id?:number
};
	/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
["user_bool_exp"]: GraphQLTypes["user_bool_exp"];
	/** unique or primary key constraints on table "user" */
["user_constraint"]: GraphQLTypes["user_constraint"];
	/** input type for incrementing numeric columns in table "user" */
["user_inc_input"]: GraphQLTypes["user_inc_input"];
	/** input type for inserting data into table "user" */
["user_insert_input"]: GraphQLTypes["user_insert_input"];
	/** aggregate max on columns */
["user_max_fields"]: {
		created_at?:ModelTypes["timestamptz"],
	email?:string,
	id?:number,
	password?:string,
	updated_at?:ModelTypes["timestamptz"]
};
	/** aggregate min on columns */
["user_min_fields"]: {
		created_at?:ModelTypes["timestamptz"],
	email?:string,
	id?:number,
	password?:string,
	updated_at?:ModelTypes["timestamptz"]
};
	/** response of any mutation on the table "user" */
["user_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["user"][]
};
	/** input type for inserting object relation for remote table "user" */
["user_obj_rel_insert_input"]: GraphQLTypes["user_obj_rel_insert_input"];
	/** on conflict condition type for table "user" */
["user_on_conflict"]: GraphQLTypes["user_on_conflict"];
	/** Ordering options when selecting data from "user". */
["user_order_by"]: GraphQLTypes["user_order_by"];
	/** primary key columns input for table: user */
["user_pk_columns_input"]: GraphQLTypes["user_pk_columns_input"];
	/** select columns of table "user" */
["user_select_column"]: GraphQLTypes["user_select_column"];
	/** input type for updating data in table "user" */
["user_set_input"]: GraphQLTypes["user_set_input"];
	/** aggregate stddev on columns */
["user_stddev_fields"]: {
		id?:number
};
	/** aggregate stddev_pop on columns */
["user_stddev_pop_fields"]: {
		id?:number
};
	/** aggregate stddev_samp on columns */
["user_stddev_samp_fields"]: {
		id?:number
};
	/** aggregate sum on columns */
["user_sum_fields"]: {
		id?:number
};
	/** update columns of table "user" */
["user_update_column"]: GraphQLTypes["user_update_column"];
	/** aggregate var_pop on columns */
["user_var_pop_fields"]: {
		id?:number
};
	/** aggregate var_samp on columns */
["user_var_samp_fields"]: {
		id?:number
};
	/** aggregate variance on columns */
["user_variance_fields"]: {
		id?:number
}
    }

export type GraphQLTypes = {
    /** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
["Int_comparison_exp"]: {
		_eq?: number,
	_gt?: number,
	_gte?: number,
	_in?: Array<number>,
	_is_null?: boolean,
	_lt?: number,
	_lte?: number,
	_neq?: number,
	_nin?: Array<number>
};
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
		_eq?: string,
	_gt?: string,
	_gte?: string,
	/** does the column match the given case-insensitive pattern */
	_ilike?: string,
	_in?: Array<string>,
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: string,
	_is_null?: boolean,
	/** does the column match the given pattern */
	_like?: string,
	_lt?: string,
	_lte?: string,
	_neq?: string,
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: string,
	_nin?: Array<string>,
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: string,
	/** does the column NOT match the given pattern */
	_nlike?: string,
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: string,
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: string,
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: string,
	/** does the column match the given SQL regular expression */
	_similar?: string
};
	/** columns and relationships of "meetup" */
["meetup"]: {
	__typename: "meetup",
	created_at: GraphQLTypes["timestamptz"],
	datetime: GraphQLTypes["timestamptz"],
	description: string,
	id: number,
	image_url: string,
	location: string,
	/** An array relationship */
	meetup_comments: Array<GraphQLTypes["meetup_comment"]>,
	/** An aggregate relationship */
	meetup_comments_aggregate: GraphQLTypes["meetup_comment_aggregate"],
	/** An array relationship */
	meetup_users: Array<GraphQLTypes["meetup_user"]>,
	/** An aggregate relationship */
	meetup_users_aggregate: GraphQLTypes["meetup_user_aggregate"],
	name: string,
	updated_at: GraphQLTypes["timestamptz"]
};
	/** aggregated selection of "meetup" */
["meetup_aggregate"]: {
	__typename: "meetup_aggregate",
	aggregate?: GraphQLTypes["meetup_aggregate_fields"],
	nodes: Array<GraphQLTypes["meetup"]>
};
	/** aggregate fields of "meetup" */
["meetup_aggregate_fields"]: {
	__typename: "meetup_aggregate_fields",
	avg?: GraphQLTypes["meetup_avg_fields"],
	count: number,
	max?: GraphQLTypes["meetup_max_fields"],
	min?: GraphQLTypes["meetup_min_fields"],
	stddev?: GraphQLTypes["meetup_stddev_fields"],
	stddev_pop?: GraphQLTypes["meetup_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["meetup_stddev_samp_fields"],
	sum?: GraphQLTypes["meetup_sum_fields"],
	var_pop?: GraphQLTypes["meetup_var_pop_fields"],
	var_samp?: GraphQLTypes["meetup_var_samp_fields"],
	variance?: GraphQLTypes["meetup_variance_fields"]
};
	/** aggregate avg on columns */
["meetup_avg_fields"]: {
	__typename: "meetup_avg_fields",
	id?: number
};
	/** Boolean expression to filter rows from the table "meetup". All fields are combined with a logical 'AND'. */
["meetup_bool_exp"]: {
		_and?: Array<GraphQLTypes["meetup_bool_exp"]>,
	_not?: GraphQLTypes["meetup_bool_exp"],
	_or?: Array<GraphQLTypes["meetup_bool_exp"]>,
	created_at?: GraphQLTypes["timestamptz_comparison_exp"],
	datetime?: GraphQLTypes["timestamptz_comparison_exp"],
	description?: GraphQLTypes["String_comparison_exp"],
	id?: GraphQLTypes["Int_comparison_exp"],
	image_url?: GraphQLTypes["String_comparison_exp"],
	location?: GraphQLTypes["String_comparison_exp"],
	meetup_comments?: GraphQLTypes["meetup_comment_bool_exp"],
	meetup_users?: GraphQLTypes["meetup_user_bool_exp"],
	name?: GraphQLTypes["String_comparison_exp"],
	updated_at?: GraphQLTypes["timestamptz_comparison_exp"]
};
	/** columns and relationships of "meetup_comment" */
["meetup_comment"]: {
	__typename: "meetup_comment",
	id: number,
	/** An object relationship */
	meetup: GraphQLTypes["meetup"],
	meetup_id: number,
	text: string,
	/** An object relationship */
	user: GraphQLTypes["user"],
	user_id: number
};
	/** aggregated selection of "meetup_comment" */
["meetup_comment_aggregate"]: {
	__typename: "meetup_comment_aggregate",
	aggregate?: GraphQLTypes["meetup_comment_aggregate_fields"],
	nodes: Array<GraphQLTypes["meetup_comment"]>
};
	/** aggregate fields of "meetup_comment" */
["meetup_comment_aggregate_fields"]: {
	__typename: "meetup_comment_aggregate_fields",
	avg?: GraphQLTypes["meetup_comment_avg_fields"],
	count: number,
	max?: GraphQLTypes["meetup_comment_max_fields"],
	min?: GraphQLTypes["meetup_comment_min_fields"],
	stddev?: GraphQLTypes["meetup_comment_stddev_fields"],
	stddev_pop?: GraphQLTypes["meetup_comment_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["meetup_comment_stddev_samp_fields"],
	sum?: GraphQLTypes["meetup_comment_sum_fields"],
	var_pop?: GraphQLTypes["meetup_comment_var_pop_fields"],
	var_samp?: GraphQLTypes["meetup_comment_var_samp_fields"],
	variance?: GraphQLTypes["meetup_comment_variance_fields"]
};
	/** order by aggregate values of table "meetup_comment" */
["meetup_comment_aggregate_order_by"]: {
		avg?: GraphQLTypes["meetup_comment_avg_order_by"],
	count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["meetup_comment_max_order_by"],
	min?: GraphQLTypes["meetup_comment_min_order_by"],
	stddev?: GraphQLTypes["meetup_comment_stddev_order_by"],
	stddev_pop?: GraphQLTypes["meetup_comment_stddev_pop_order_by"],
	stddev_samp?: GraphQLTypes["meetup_comment_stddev_samp_order_by"],
	sum?: GraphQLTypes["meetup_comment_sum_order_by"],
	var_pop?: GraphQLTypes["meetup_comment_var_pop_order_by"],
	var_samp?: GraphQLTypes["meetup_comment_var_samp_order_by"],
	variance?: GraphQLTypes["meetup_comment_variance_order_by"]
};
	/** input type for inserting array relation for remote table "meetup_comment" */
["meetup_comment_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["meetup_comment_insert_input"]>,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["meetup_comment_on_conflict"]
};
	/** aggregate avg on columns */
["meetup_comment_avg_fields"]: {
	__typename: "meetup_comment_avg_fields",
	id?: number,
	meetup_id?: number,
	user_id?: number
};
	/** order by avg() on columns of table "meetup_comment" */
["meetup_comment_avg_order_by"]: {
		id?: GraphQLTypes["order_by"],
	meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "meetup_comment". All fields are combined with a logical 'AND'. */
["meetup_comment_bool_exp"]: {
		_and?: Array<GraphQLTypes["meetup_comment_bool_exp"]>,
	_not?: GraphQLTypes["meetup_comment_bool_exp"],
	_or?: Array<GraphQLTypes["meetup_comment_bool_exp"]>,
	id?: GraphQLTypes["Int_comparison_exp"],
	meetup?: GraphQLTypes["meetup_bool_exp"],
	meetup_id?: GraphQLTypes["Int_comparison_exp"],
	text?: GraphQLTypes["String_comparison_exp"],
	user?: GraphQLTypes["user_bool_exp"],
	user_id?: GraphQLTypes["Int_comparison_exp"]
};
	/** unique or primary key constraints on table "meetup_comment" */
["meetup_comment_constraint"]: meetup_comment_constraint;
	/** input type for incrementing numeric columns in table "meetup_comment" */
["meetup_comment_inc_input"]: {
		id?: number,
	meetup_id?: number,
	user_id?: number
};
	/** input type for inserting data into table "meetup_comment" */
["meetup_comment_insert_input"]: {
		id?: number,
	meetup?: GraphQLTypes["meetup_obj_rel_insert_input"],
	meetup_id?: number,
	text?: string,
	user?: GraphQLTypes["user_obj_rel_insert_input"],
	user_id?: number
};
	/** aggregate max on columns */
["meetup_comment_max_fields"]: {
	__typename: "meetup_comment_max_fields",
	id?: number,
	meetup_id?: number,
	text?: string,
	user_id?: number
};
	/** order by max() on columns of table "meetup_comment" */
["meetup_comment_max_order_by"]: {
		id?: GraphQLTypes["order_by"],
	meetup_id?: GraphQLTypes["order_by"],
	text?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["meetup_comment_min_fields"]: {
	__typename: "meetup_comment_min_fields",
	id?: number,
	meetup_id?: number,
	text?: string,
	user_id?: number
};
	/** order by min() on columns of table "meetup_comment" */
["meetup_comment_min_order_by"]: {
		id?: GraphQLTypes["order_by"],
	meetup_id?: GraphQLTypes["order_by"],
	text?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** response of any mutation on the table "meetup_comment" */
["meetup_comment_mutation_response"]: {
	__typename: "meetup_comment_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["meetup_comment"]>
};
	/** on conflict condition type for table "meetup_comment" */
["meetup_comment_on_conflict"]: {
		constraint: GraphQLTypes["meetup_comment_constraint"],
	update_columns: Array<GraphQLTypes["meetup_comment_update_column"]>,
	where?: GraphQLTypes["meetup_comment_bool_exp"]
};
	/** Ordering options when selecting data from "meetup_comment". */
["meetup_comment_order_by"]: {
		id?: GraphQLTypes["order_by"],
	meetup?: GraphQLTypes["meetup_order_by"],
	meetup_id?: GraphQLTypes["order_by"],
	text?: GraphQLTypes["order_by"],
	user?: GraphQLTypes["user_order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: meetup_comment */
["meetup_comment_pk_columns_input"]: {
		id: number
};
	/** select columns of table "meetup_comment" */
["meetup_comment_select_column"]: meetup_comment_select_column;
	/** input type for updating data in table "meetup_comment" */
["meetup_comment_set_input"]: {
		id?: number,
	meetup_id?: number,
	text?: string,
	user_id?: number
};
	/** aggregate stddev on columns */
["meetup_comment_stddev_fields"]: {
	__typename: "meetup_comment_stddev_fields",
	id?: number,
	meetup_id?: number,
	user_id?: number
};
	/** order by stddev() on columns of table "meetup_comment" */
["meetup_comment_stddev_order_by"]: {
		id?: GraphQLTypes["order_by"],
	meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["meetup_comment_stddev_pop_fields"]: {
	__typename: "meetup_comment_stddev_pop_fields",
	id?: number,
	meetup_id?: number,
	user_id?: number
};
	/** order by stddev_pop() on columns of table "meetup_comment" */
["meetup_comment_stddev_pop_order_by"]: {
		id?: GraphQLTypes["order_by"],
	meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["meetup_comment_stddev_samp_fields"]: {
	__typename: "meetup_comment_stddev_samp_fields",
	id?: number,
	meetup_id?: number,
	user_id?: number
};
	/** order by stddev_samp() on columns of table "meetup_comment" */
["meetup_comment_stddev_samp_order_by"]: {
		id?: GraphQLTypes["order_by"],
	meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate sum on columns */
["meetup_comment_sum_fields"]: {
	__typename: "meetup_comment_sum_fields",
	id?: number,
	meetup_id?: number,
	user_id?: number
};
	/** order by sum() on columns of table "meetup_comment" */
["meetup_comment_sum_order_by"]: {
		id?: GraphQLTypes["order_by"],
	meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** update columns of table "meetup_comment" */
["meetup_comment_update_column"]: meetup_comment_update_column;
	/** aggregate var_pop on columns */
["meetup_comment_var_pop_fields"]: {
	__typename: "meetup_comment_var_pop_fields",
	id?: number,
	meetup_id?: number,
	user_id?: number
};
	/** order by var_pop() on columns of table "meetup_comment" */
["meetup_comment_var_pop_order_by"]: {
		id?: GraphQLTypes["order_by"],
	meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate var_samp on columns */
["meetup_comment_var_samp_fields"]: {
	__typename: "meetup_comment_var_samp_fields",
	id?: number,
	meetup_id?: number,
	user_id?: number
};
	/** order by var_samp() on columns of table "meetup_comment" */
["meetup_comment_var_samp_order_by"]: {
		id?: GraphQLTypes["order_by"],
	meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate variance on columns */
["meetup_comment_variance_fields"]: {
	__typename: "meetup_comment_variance_fields",
	id?: number,
	meetup_id?: number,
	user_id?: number
};
	/** order by variance() on columns of table "meetup_comment" */
["meetup_comment_variance_order_by"]: {
		id?: GraphQLTypes["order_by"],
	meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** unique or primary key constraints on table "meetup" */
["meetup_constraint"]: meetup_constraint;
	/** input type for incrementing numeric columns in table "meetup" */
["meetup_inc_input"]: {
		id?: number
};
	/** input type for inserting data into table "meetup" */
["meetup_insert_input"]: {
		created_at?: GraphQLTypes["timestamptz"],
	datetime?: GraphQLTypes["timestamptz"],
	description?: string,
	id?: number,
	image_url?: string,
	location?: string,
	meetup_comments?: GraphQLTypes["meetup_comment_arr_rel_insert_input"],
	meetup_users?: GraphQLTypes["meetup_user_arr_rel_insert_input"],
	name?: string,
	updated_at?: GraphQLTypes["timestamptz"]
};
	/** aggregate max on columns */
["meetup_max_fields"]: {
	__typename: "meetup_max_fields",
	created_at?: GraphQLTypes["timestamptz"],
	datetime?: GraphQLTypes["timestamptz"],
	description?: string,
	id?: number,
	image_url?: string,
	location?: string,
	name?: string,
	updated_at?: GraphQLTypes["timestamptz"]
};
	/** aggregate min on columns */
["meetup_min_fields"]: {
	__typename: "meetup_min_fields",
	created_at?: GraphQLTypes["timestamptz"],
	datetime?: GraphQLTypes["timestamptz"],
	description?: string,
	id?: number,
	image_url?: string,
	location?: string,
	name?: string,
	updated_at?: GraphQLTypes["timestamptz"]
};
	/** response of any mutation on the table "meetup" */
["meetup_mutation_response"]: {
	__typename: "meetup_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["meetup"]>
};
	/** input type for inserting object relation for remote table "meetup" */
["meetup_obj_rel_insert_input"]: {
		data: GraphQLTypes["meetup_insert_input"],
	/** on conflict condition */
	on_conflict?: GraphQLTypes["meetup_on_conflict"]
};
	/** on conflict condition type for table "meetup" */
["meetup_on_conflict"]: {
		constraint: GraphQLTypes["meetup_constraint"],
	update_columns: Array<GraphQLTypes["meetup_update_column"]>,
	where?: GraphQLTypes["meetup_bool_exp"]
};
	/** Ordering options when selecting data from "meetup". */
["meetup_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	datetime?: GraphQLTypes["order_by"],
	description?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	image_url?: GraphQLTypes["order_by"],
	location?: GraphQLTypes["order_by"],
	meetup_comments_aggregate?: GraphQLTypes["meetup_comment_aggregate_order_by"],
	meetup_users_aggregate?: GraphQLTypes["meetup_user_aggregate_order_by"],
	name?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: meetup */
["meetup_pk_columns_input"]: {
		id: number
};
	/** select columns of table "meetup" */
["meetup_select_column"]: meetup_select_column;
	/** input type for updating data in table "meetup" */
["meetup_set_input"]: {
		created_at?: GraphQLTypes["timestamptz"],
	datetime?: GraphQLTypes["timestamptz"],
	description?: string,
	id?: number,
	image_url?: string,
	location?: string,
	name?: string,
	updated_at?: GraphQLTypes["timestamptz"]
};
	/** aggregate stddev on columns */
["meetup_stddev_fields"]: {
	__typename: "meetup_stddev_fields",
	id?: number
};
	/** aggregate stddev_pop on columns */
["meetup_stddev_pop_fields"]: {
	__typename: "meetup_stddev_pop_fields",
	id?: number
};
	/** aggregate stddev_samp on columns */
["meetup_stddev_samp_fields"]: {
	__typename: "meetup_stddev_samp_fields",
	id?: number
};
	/** aggregate sum on columns */
["meetup_sum_fields"]: {
	__typename: "meetup_sum_fields",
	id?: number
};
	/** update columns of table "meetup" */
["meetup_update_column"]: meetup_update_column;
	/** columns and relationships of "meetup_user" */
["meetup_user"]: {
	__typename: "meetup_user",
	/** An object relationship */
	meetup: GraphQLTypes["meetup"],
	meetup_id: number,
	/** An object relationship */
	user: GraphQLTypes["user"],
	user_id: number
};
	/** aggregated selection of "meetup_user" */
["meetup_user_aggregate"]: {
	__typename: "meetup_user_aggregate",
	aggregate?: GraphQLTypes["meetup_user_aggregate_fields"],
	nodes: Array<GraphQLTypes["meetup_user"]>
};
	/** aggregate fields of "meetup_user" */
["meetup_user_aggregate_fields"]: {
	__typename: "meetup_user_aggregate_fields",
	avg?: GraphQLTypes["meetup_user_avg_fields"],
	count: number,
	max?: GraphQLTypes["meetup_user_max_fields"],
	min?: GraphQLTypes["meetup_user_min_fields"],
	stddev?: GraphQLTypes["meetup_user_stddev_fields"],
	stddev_pop?: GraphQLTypes["meetup_user_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["meetup_user_stddev_samp_fields"],
	sum?: GraphQLTypes["meetup_user_sum_fields"],
	var_pop?: GraphQLTypes["meetup_user_var_pop_fields"],
	var_samp?: GraphQLTypes["meetup_user_var_samp_fields"],
	variance?: GraphQLTypes["meetup_user_variance_fields"]
};
	/** order by aggregate values of table "meetup_user" */
["meetup_user_aggregate_order_by"]: {
		avg?: GraphQLTypes["meetup_user_avg_order_by"],
	count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["meetup_user_max_order_by"],
	min?: GraphQLTypes["meetup_user_min_order_by"],
	stddev?: GraphQLTypes["meetup_user_stddev_order_by"],
	stddev_pop?: GraphQLTypes["meetup_user_stddev_pop_order_by"],
	stddev_samp?: GraphQLTypes["meetup_user_stddev_samp_order_by"],
	sum?: GraphQLTypes["meetup_user_sum_order_by"],
	var_pop?: GraphQLTypes["meetup_user_var_pop_order_by"],
	var_samp?: GraphQLTypes["meetup_user_var_samp_order_by"],
	variance?: GraphQLTypes["meetup_user_variance_order_by"]
};
	/** input type for inserting array relation for remote table "meetup_user" */
["meetup_user_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["meetup_user_insert_input"]>,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["meetup_user_on_conflict"]
};
	/** aggregate avg on columns */
["meetup_user_avg_fields"]: {
	__typename: "meetup_user_avg_fields",
	meetup_id?: number,
	user_id?: number
};
	/** order by avg() on columns of table "meetup_user" */
["meetup_user_avg_order_by"]: {
		meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "meetup_user". All fields are combined with a logical 'AND'. */
["meetup_user_bool_exp"]: {
		_and?: Array<GraphQLTypes["meetup_user_bool_exp"]>,
	_not?: GraphQLTypes["meetup_user_bool_exp"],
	_or?: Array<GraphQLTypes["meetup_user_bool_exp"]>,
	meetup?: GraphQLTypes["meetup_bool_exp"],
	meetup_id?: GraphQLTypes["Int_comparison_exp"],
	user?: GraphQLTypes["user_bool_exp"],
	user_id?: GraphQLTypes["Int_comparison_exp"]
};
	/** unique or primary key constraints on table "meetup_user" */
["meetup_user_constraint"]: meetup_user_constraint;
	/** input type for incrementing numeric columns in table "meetup_user" */
["meetup_user_inc_input"]: {
		meetup_id?: number,
	user_id?: number
};
	/** input type for inserting data into table "meetup_user" */
["meetup_user_insert_input"]: {
		meetup?: GraphQLTypes["meetup_obj_rel_insert_input"],
	meetup_id?: number,
	user?: GraphQLTypes["user_obj_rel_insert_input"],
	user_id?: number
};
	/** aggregate max on columns */
["meetup_user_max_fields"]: {
	__typename: "meetup_user_max_fields",
	meetup_id?: number,
	user_id?: number
};
	/** order by max() on columns of table "meetup_user" */
["meetup_user_max_order_by"]: {
		meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["meetup_user_min_fields"]: {
	__typename: "meetup_user_min_fields",
	meetup_id?: number,
	user_id?: number
};
	/** order by min() on columns of table "meetup_user" */
["meetup_user_min_order_by"]: {
		meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** response of any mutation on the table "meetup_user" */
["meetup_user_mutation_response"]: {
	__typename: "meetup_user_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["meetup_user"]>
};
	/** on conflict condition type for table "meetup_user" */
["meetup_user_on_conflict"]: {
		constraint: GraphQLTypes["meetup_user_constraint"],
	update_columns: Array<GraphQLTypes["meetup_user_update_column"]>,
	where?: GraphQLTypes["meetup_user_bool_exp"]
};
	/** Ordering options when selecting data from "meetup_user". */
["meetup_user_order_by"]: {
		meetup?: GraphQLTypes["meetup_order_by"],
	meetup_id?: GraphQLTypes["order_by"],
	user?: GraphQLTypes["user_order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: meetup_user */
["meetup_user_pk_columns_input"]: {
		meetup_id: number,
	user_id: number
};
	/** select columns of table "meetup_user" */
["meetup_user_select_column"]: meetup_user_select_column;
	/** input type for updating data in table "meetup_user" */
["meetup_user_set_input"]: {
		meetup_id?: number,
	user_id?: number
};
	/** aggregate stddev on columns */
["meetup_user_stddev_fields"]: {
	__typename: "meetup_user_stddev_fields",
	meetup_id?: number,
	user_id?: number
};
	/** order by stddev() on columns of table "meetup_user" */
["meetup_user_stddev_order_by"]: {
		meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["meetup_user_stddev_pop_fields"]: {
	__typename: "meetup_user_stddev_pop_fields",
	meetup_id?: number,
	user_id?: number
};
	/** order by stddev_pop() on columns of table "meetup_user" */
["meetup_user_stddev_pop_order_by"]: {
		meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["meetup_user_stddev_samp_fields"]: {
	__typename: "meetup_user_stddev_samp_fields",
	meetup_id?: number,
	user_id?: number
};
	/** order by stddev_samp() on columns of table "meetup_user" */
["meetup_user_stddev_samp_order_by"]: {
		meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate sum on columns */
["meetup_user_sum_fields"]: {
	__typename: "meetup_user_sum_fields",
	meetup_id?: number,
	user_id?: number
};
	/** order by sum() on columns of table "meetup_user" */
["meetup_user_sum_order_by"]: {
		meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** update columns of table "meetup_user" */
["meetup_user_update_column"]: meetup_user_update_column;
	/** aggregate var_pop on columns */
["meetup_user_var_pop_fields"]: {
	__typename: "meetup_user_var_pop_fields",
	meetup_id?: number,
	user_id?: number
};
	/** order by var_pop() on columns of table "meetup_user" */
["meetup_user_var_pop_order_by"]: {
		meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate var_samp on columns */
["meetup_user_var_samp_fields"]: {
	__typename: "meetup_user_var_samp_fields",
	meetup_id?: number,
	user_id?: number
};
	/** order by var_samp() on columns of table "meetup_user" */
["meetup_user_var_samp_order_by"]: {
		meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate variance on columns */
["meetup_user_variance_fields"]: {
	__typename: "meetup_user_variance_fields",
	meetup_id?: number,
	user_id?: number
};
	/** order by variance() on columns of table "meetup_user" */
["meetup_user_variance_order_by"]: {
		meetup_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate var_pop on columns */
["meetup_var_pop_fields"]: {
	__typename: "meetup_var_pop_fields",
	id?: number
};
	/** aggregate var_samp on columns */
["meetup_var_samp_fields"]: {
	__typename: "meetup_var_samp_fields",
	id?: number
};
	/** aggregate variance on columns */
["meetup_variance_fields"]: {
	__typename: "meetup_variance_fields",
	id?: number
};
	/** mutation root */
["mutation_root"]: {
	__typename: "mutation_root",
	/** delete data from the table: "meetup" */
	delete_meetup?: GraphQLTypes["meetup_mutation_response"],
	/** delete single row from the table: "meetup" */
	delete_meetup_by_pk?: GraphQLTypes["meetup"],
	/** delete data from the table: "meetup_comment" */
	delete_meetup_comment?: GraphQLTypes["meetup_comment_mutation_response"],
	/** delete single row from the table: "meetup_comment" */
	delete_meetup_comment_by_pk?: GraphQLTypes["meetup_comment"],
	/** delete data from the table: "meetup_user" */
	delete_meetup_user?: GraphQLTypes["meetup_user_mutation_response"],
	/** delete single row from the table: "meetup_user" */
	delete_meetup_user_by_pk?: GraphQLTypes["meetup_user"],
	/** delete data from the table: "user" */
	delete_user?: GraphQLTypes["user_mutation_response"],
	/** delete single row from the table: "user" */
	delete_user_by_pk?: GraphQLTypes["user"],
	/** insert data into the table: "meetup" */
	insert_meetup?: GraphQLTypes["meetup_mutation_response"],
	/** insert data into the table: "meetup_comment" */
	insert_meetup_comment?: GraphQLTypes["meetup_comment_mutation_response"],
	/** insert a single row into the table: "meetup_comment" */
	insert_meetup_comment_one?: GraphQLTypes["meetup_comment"],
	/** insert a single row into the table: "meetup" */
	insert_meetup_one?: GraphQLTypes["meetup"],
	/** insert data into the table: "meetup_user" */
	insert_meetup_user?: GraphQLTypes["meetup_user_mutation_response"],
	/** insert a single row into the table: "meetup_user" */
	insert_meetup_user_one?: GraphQLTypes["meetup_user"],
	/** insert data into the table: "user" */
	insert_user?: GraphQLTypes["user_mutation_response"],
	/** insert a single row into the table: "user" */
	insert_user_one?: GraphQLTypes["user"],
	/** update data of the table: "meetup" */
	update_meetup?: GraphQLTypes["meetup_mutation_response"],
	/** update single row of the table: "meetup" */
	update_meetup_by_pk?: GraphQLTypes["meetup"],
	/** update data of the table: "meetup_comment" */
	update_meetup_comment?: GraphQLTypes["meetup_comment_mutation_response"],
	/** update single row of the table: "meetup_comment" */
	update_meetup_comment_by_pk?: GraphQLTypes["meetup_comment"],
	/** update data of the table: "meetup_user" */
	update_meetup_user?: GraphQLTypes["meetup_user_mutation_response"],
	/** update single row of the table: "meetup_user" */
	update_meetup_user_by_pk?: GraphQLTypes["meetup_user"],
	/** update data of the table: "user" */
	update_user?: GraphQLTypes["user_mutation_response"],
	/** update single row of the table: "user" */
	update_user_by_pk?: GraphQLTypes["user"]
};
	/** column ordering options */
["order_by"]: order_by;
	["query_root"]: {
	__typename: "query_root",
	/** fetch data from the table: "meetup" */
	meetup: Array<GraphQLTypes["meetup"]>,
	/** fetch aggregated fields from the table: "meetup" */
	meetup_aggregate: GraphQLTypes["meetup_aggregate"],
	/** fetch data from the table: "meetup" using primary key columns */
	meetup_by_pk?: GraphQLTypes["meetup"],
	/** fetch data from the table: "meetup_comment" */
	meetup_comment: Array<GraphQLTypes["meetup_comment"]>,
	/** fetch aggregated fields from the table: "meetup_comment" */
	meetup_comment_aggregate: GraphQLTypes["meetup_comment_aggregate"],
	/** fetch data from the table: "meetup_comment" using primary key columns */
	meetup_comment_by_pk?: GraphQLTypes["meetup_comment"],
	/** fetch data from the table: "meetup_user" */
	meetup_user: Array<GraphQLTypes["meetup_user"]>,
	/** fetch aggregated fields from the table: "meetup_user" */
	meetup_user_aggregate: GraphQLTypes["meetup_user_aggregate"],
	/** fetch data from the table: "meetup_user" using primary key columns */
	meetup_user_by_pk?: GraphQLTypes["meetup_user"],
	/** fetch data from the table: "user" */
	user: Array<GraphQLTypes["user"]>,
	/** fetch aggregated fields from the table: "user" */
	user_aggregate: GraphQLTypes["user_aggregate"],
	/** fetch data from the table: "user" using primary key columns */
	user_by_pk?: GraphQLTypes["user"]
};
	["subscription_root"]: {
	__typename: "subscription_root",
	/** fetch data from the table: "meetup" */
	meetup: Array<GraphQLTypes["meetup"]>,
	/** fetch aggregated fields from the table: "meetup" */
	meetup_aggregate: GraphQLTypes["meetup_aggregate"],
	/** fetch data from the table: "meetup" using primary key columns */
	meetup_by_pk?: GraphQLTypes["meetup"],
	/** fetch data from the table: "meetup_comment" */
	meetup_comment: Array<GraphQLTypes["meetup_comment"]>,
	/** fetch aggregated fields from the table: "meetup_comment" */
	meetup_comment_aggregate: GraphQLTypes["meetup_comment_aggregate"],
	/** fetch data from the table: "meetup_comment" using primary key columns */
	meetup_comment_by_pk?: GraphQLTypes["meetup_comment"],
	/** fetch data from the table: "meetup_user" */
	meetup_user: Array<GraphQLTypes["meetup_user"]>,
	/** fetch aggregated fields from the table: "meetup_user" */
	meetup_user_aggregate: GraphQLTypes["meetup_user_aggregate"],
	/** fetch data from the table: "meetup_user" using primary key columns */
	meetup_user_by_pk?: GraphQLTypes["meetup_user"],
	/** fetch data from the table: "user" */
	user: Array<GraphQLTypes["user"]>,
	/** fetch aggregated fields from the table: "user" */
	user_aggregate: GraphQLTypes["user_aggregate"],
	/** fetch data from the table: "user" using primary key columns */
	user_by_pk?: GraphQLTypes["user"]
};
	["timestamptz"]:any;
	/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
["timestamptz_comparison_exp"]: {
		_eq?: GraphQLTypes["timestamptz"],
	_gt?: GraphQLTypes["timestamptz"],
	_gte?: GraphQLTypes["timestamptz"],
	_in?: Array<GraphQLTypes["timestamptz"]>,
	_is_null?: boolean,
	_lt?: GraphQLTypes["timestamptz"],
	_lte?: GraphQLTypes["timestamptz"],
	_neq?: GraphQLTypes["timestamptz"],
	_nin?: Array<GraphQLTypes["timestamptz"]>
};
	/** columns and relationships of "user" */
["user"]: {
	__typename: "user",
	created_at: GraphQLTypes["timestamptz"],
	email: string,
	id: number,
	/** An array relationship */
	meetup_comments: Array<GraphQLTypes["meetup_comment"]>,
	/** An aggregate relationship */
	meetup_comments_aggregate: GraphQLTypes["meetup_comment_aggregate"],
	/** An array relationship */
	meetup_users: Array<GraphQLTypes["meetup_user"]>,
	/** An aggregate relationship */
	meetup_users_aggregate: GraphQLTypes["meetup_user_aggregate"],
	password: string,
	updated_at: GraphQLTypes["timestamptz"]
};
	/** aggregated selection of "user" */
["user_aggregate"]: {
	__typename: "user_aggregate",
	aggregate?: GraphQLTypes["user_aggregate_fields"],
	nodes: Array<GraphQLTypes["user"]>
};
	/** aggregate fields of "user" */
["user_aggregate_fields"]: {
	__typename: "user_aggregate_fields",
	avg?: GraphQLTypes["user_avg_fields"],
	count: number,
	max?: GraphQLTypes["user_max_fields"],
	min?: GraphQLTypes["user_min_fields"],
	stddev?: GraphQLTypes["user_stddev_fields"],
	stddev_pop?: GraphQLTypes["user_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["user_stddev_samp_fields"],
	sum?: GraphQLTypes["user_sum_fields"],
	var_pop?: GraphQLTypes["user_var_pop_fields"],
	var_samp?: GraphQLTypes["user_var_samp_fields"],
	variance?: GraphQLTypes["user_variance_fields"]
};
	/** aggregate avg on columns */
["user_avg_fields"]: {
	__typename: "user_avg_fields",
	id?: number
};
	/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
["user_bool_exp"]: {
		_and?: Array<GraphQLTypes["user_bool_exp"]>,
	_not?: GraphQLTypes["user_bool_exp"],
	_or?: Array<GraphQLTypes["user_bool_exp"]>,
	created_at?: GraphQLTypes["timestamptz_comparison_exp"],
	email?: GraphQLTypes["String_comparison_exp"],
	id?: GraphQLTypes["Int_comparison_exp"],
	meetup_comments?: GraphQLTypes["meetup_comment_bool_exp"],
	meetup_users?: GraphQLTypes["meetup_user_bool_exp"],
	password?: GraphQLTypes["String_comparison_exp"],
	updated_at?: GraphQLTypes["timestamptz_comparison_exp"]
};
	/** unique or primary key constraints on table "user" */
["user_constraint"]: user_constraint;
	/** input type for incrementing numeric columns in table "user" */
["user_inc_input"]: {
		id?: number
};
	/** input type for inserting data into table "user" */
["user_insert_input"]: {
		created_at?: GraphQLTypes["timestamptz"],
	email?: string,
	id?: number,
	meetup_comments?: GraphQLTypes["meetup_comment_arr_rel_insert_input"],
	meetup_users?: GraphQLTypes["meetup_user_arr_rel_insert_input"],
	password?: string,
	updated_at?: GraphQLTypes["timestamptz"]
};
	/** aggregate max on columns */
["user_max_fields"]: {
	__typename: "user_max_fields",
	created_at?: GraphQLTypes["timestamptz"],
	email?: string,
	id?: number,
	password?: string,
	updated_at?: GraphQLTypes["timestamptz"]
};
	/** aggregate min on columns */
["user_min_fields"]: {
	__typename: "user_min_fields",
	created_at?: GraphQLTypes["timestamptz"],
	email?: string,
	id?: number,
	password?: string,
	updated_at?: GraphQLTypes["timestamptz"]
};
	/** response of any mutation on the table "user" */
["user_mutation_response"]: {
	__typename: "user_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["user"]>
};
	/** input type for inserting object relation for remote table "user" */
["user_obj_rel_insert_input"]: {
		data: GraphQLTypes["user_insert_input"],
	/** on conflict condition */
	on_conflict?: GraphQLTypes["user_on_conflict"]
};
	/** on conflict condition type for table "user" */
["user_on_conflict"]: {
		constraint: GraphQLTypes["user_constraint"],
	update_columns: Array<GraphQLTypes["user_update_column"]>,
	where?: GraphQLTypes["user_bool_exp"]
};
	/** Ordering options when selecting data from "user". */
["user_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	email?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	meetup_comments_aggregate?: GraphQLTypes["meetup_comment_aggregate_order_by"],
	meetup_users_aggregate?: GraphQLTypes["meetup_user_aggregate_order_by"],
	password?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: user */
["user_pk_columns_input"]: {
		id: number
};
	/** select columns of table "user" */
["user_select_column"]: user_select_column;
	/** input type for updating data in table "user" */
["user_set_input"]: {
		created_at?: GraphQLTypes["timestamptz"],
	email?: string,
	id?: number,
	password?: string,
	updated_at?: GraphQLTypes["timestamptz"]
};
	/** aggregate stddev on columns */
["user_stddev_fields"]: {
	__typename: "user_stddev_fields",
	id?: number
};
	/** aggregate stddev_pop on columns */
["user_stddev_pop_fields"]: {
	__typename: "user_stddev_pop_fields",
	id?: number
};
	/** aggregate stddev_samp on columns */
["user_stddev_samp_fields"]: {
	__typename: "user_stddev_samp_fields",
	id?: number
};
	/** aggregate sum on columns */
["user_sum_fields"]: {
	__typename: "user_sum_fields",
	id?: number
};
	/** update columns of table "user" */
["user_update_column"]: user_update_column;
	/** aggregate var_pop on columns */
["user_var_pop_fields"]: {
	__typename: "user_var_pop_fields",
	id?: number
};
	/** aggregate var_samp on columns */
["user_var_samp_fields"]: {
	__typename: "user_var_samp_fields",
	id?: number
};
	/** aggregate variance on columns */
["user_variance_fields"]: {
	__typename: "user_variance_fields",
	id?: number
}
    }
/** unique or primary key constraints on table "meetup_comment" */
export const enum meetup_comment_constraint {
	meetup_comment_pkey = "meetup_comment_pkey",
	meetup_comment_user_id_meetup_id_text_key = "meetup_comment_user_id_meetup_id_text_key"
}
/** select columns of table "meetup_comment" */
export const enum meetup_comment_select_column {
	id = "id",
	meetup_id = "meetup_id",
	text = "text",
	user_id = "user_id"
}
/** update columns of table "meetup_comment" */
export const enum meetup_comment_update_column {
	id = "id",
	meetup_id = "meetup_id",
	text = "text",
	user_id = "user_id"
}
/** unique or primary key constraints on table "meetup" */
export const enum meetup_constraint {
	meetup_pkey = "meetup_pkey"
}
/** select columns of table "meetup" */
export const enum meetup_select_column {
	created_at = "created_at",
	datetime = "datetime",
	description = "description",
	id = "id",
	image_url = "image_url",
	location = "location",
	name = "name",
	updated_at = "updated_at"
}
/** update columns of table "meetup" */
export const enum meetup_update_column {
	created_at = "created_at",
	datetime = "datetime",
	description = "description",
	id = "id",
	image_url = "image_url",
	location = "location",
	name = "name",
	updated_at = "updated_at"
}
/** unique or primary key constraints on table "meetup_user" */
export const enum meetup_user_constraint {
	meetup_user_pkey = "meetup_user_pkey"
}
/** select columns of table "meetup_user" */
export const enum meetup_user_select_column {
	meetup_id = "meetup_id",
	user_id = "user_id"
}
/** update columns of table "meetup_user" */
export const enum meetup_user_update_column {
	meetup_id = "meetup_id",
	user_id = "user_id"
}
/** column ordering options */
export const enum order_by {
	asc = "asc",
	asc_nulls_first = "asc_nulls_first",
	asc_nulls_last = "asc_nulls_last",
	desc = "desc",
	desc_nulls_first = "desc_nulls_first",
	desc_nulls_last = "desc_nulls_last"
}
/** unique or primary key constraints on table "user" */
export const enum user_constraint {
	user_email_key = "user_email_key",
	user_pkey = "user_pkey"
}
/** select columns of table "user" */
export const enum user_select_column {
	created_at = "created_at",
	email = "email",
	id = "id",
	password = "password",
	updated_at = "updated_at"
}
/** update columns of table "user" */
export const enum user_update_column {
	created_at = "created_at",
	email = "email",
	id = "id",
	password = "password",
	updated_at = "updated_at"
}
export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P]>
          : {}
        : never;
    }[keyof DST] &
      {
        [P in keyof Omit<
          Pick<
            SRC,
            {
              [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
            }[keyof DST]
          >,
          '__typename'
        >]: IsPayLoad<DST[P]> extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };

export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationOptions = {
  variables?: Record<string, any>;
  operationName?: string;
};
export type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, options?: OperationOptions) => Promise<InputType<T, Z>>;
export type SubscriptionToGraphQL<V, T> = <Z extends V>(
  o: Z | V,
  options?: OperationOptions,
) => {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z>; errors?:string[] }) => void) => void;
  open: () => void;
};
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (query: string) => void;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .forEach((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).forEach((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string, operationName?: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${operationName ? ' ' + operationName : ''}${inspectVariables(buildQuery(tName, o))}`;
  

const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  options?: OperationOptions,
) => fn(queryConstruct(t, tName, options?.operationName)(o), options?.variables).then((r:any) => { 
  seekForAliases(r)
  return r
});

export const fullChainConstructor = <F extends FetchFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, options) => fullChainConstruct(fn)(operation, key)(o as any, options)) as OperationToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;


const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, options?: OperationOptions) =>
  fn(queryConstruct(t, tName, options?.operationName)(o));

export const fullSubscriptionConstructor = <F extends SubscriptionFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, options) => fullSubscriptionConstruct(fn)(operation, key)(o as any, options)) as SubscriptionToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


export const resolverFor = <
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
  Y extends (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> : any
>(
  type: T,
  field: Z,
  fn: Y,
) => fn as (args?: any,source?: any) => any;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  

export const apiSubscription = (options: chainOptions) => (
    query: string,
  ) => {
    try {
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e: (args: any) => void) => {
          ws.onmessage = (event:any) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
              return e(data);
            }
          };
        },
        off: (e: (args: any) => void) => {
          ws.onclose = e;
        },
        error: (e: (args: any) => void) => {
          ws.onerror = e;
        },
        open: (e: () => void) => {
          ws.onopen = e;
        },
      };
    } catch {
      throw new Error('No websockets implemented');
    }
  };


export const Thunder = (fn: FetchFunction, subscriptionFn: SubscriptionFunction) => ({
  query: fullChainConstructor(fn,'query', 'query_root'),
mutation: fullChainConstructor(fn,'mutation', 'mutation_root'),
subscription: fullSubscriptionConstructor(subscriptionFn,'subscription', 'subscription_root')
});

export const Chain = (...options: chainOptions) => ({
  query: fullChainConstructor(apiFetch(options),'query', 'query_root'),
mutation: fullChainConstructor(apiFetch(options),'mutation', 'mutation_root'),
subscription: fullSubscriptionConstructor(apiSubscription(options),'subscription', 'subscription_root')
});
export const Zeus = {
  query: (o:ValueTypes["query_root"], operationName?: string) => queryConstruct('query', 'query_root', operationName)(o),
mutation: (o:ValueTypes["mutation_root"], operationName?: string) => queryConstruct('mutation', 'mutation_root', operationName)(o),
subscription: (o:ValueTypes["subscription_root"], operationName?: string) => queryConstruct('subscription', 'subscription_root', operationName)(o)
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["query_root"]>(),
mutation: ZeusSelect<ValueTypes["mutation_root"]>(),
subscription: ZeusSelect<ValueTypes["subscription_root"]>()
};
  

export const Gql = Chain('http://localhost:8060/v1/graphql')